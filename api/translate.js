/**
 * Vercel Serverless Function — GET /api/translate?id=<entry id>&lang=<language code>
 *
 * Translates one library answer (and its references' notes) into one of the app's
 * languages with Claude, for languages that have no built-in translation.
 * Only library entries can be translated — the client sends an id, never text —
 * and responses are cached at Vercel's edge, so each answer is translated once per
 * language and then served to everyone.
 *
 * Environment variables:
 *   ANTHROPIC_API_KEY  required
 *   TRANSLATE_MODEL    optional; defaults to CLAUDE_MODEL, then claude-opus-5-5
 */
import Anthropic from '@anthropic-ai/sdk'
import scripture from '../src/data/kb/scripture.js'
import mary from '../src/data/kb/mary.js'
import church from '../src/data/kb/church.js'
import sacraments from '../src/data/kb/sacraments.js'
import salvation from '../src/data/kb/salvation.js'
import god from '../src/data/kb/god.js'
import morality from '../src/data/kb/morality.js'
import history from '../src/data/kb/history.js'
import { LANGUAGES } from '../src/data/languages.js'

const MODEL = process.env.TRANSLATE_MODEL || process.env.CLAUDE_MODEL || 'claude-opus-5-5'

const ENTRY_BY_ID = Object.fromEntries(
  [...scripture, ...mary, ...church, ...sacraments, ...salvation, ...god, ...morality, ...history].map(e => [e.id, e]),
)

// Languages translated by hand inside the app never come here.
const BUILT_IN = new Set(['en', 'ceb', 'fil'])

const strings = { type: 'array', items: { type: 'string' } }
const SCHEMA = {
  type: 'object',
  properties: {
    challenge: { type: 'string' },
    answer: { type: 'string' },
    scripture_notes: strings,
    father_texts: strings,
    document_details: strings,
    respond: { type: 'string' },
  },
  required: ['challenge', 'answer', 'scripture_notes', 'father_texts', 'document_details', 'respond'],
  additionalProperties: false,
}

const systemPrompt = (lang) => `You translate answers from a Catholic apologetics app from English into ${lang.name} (${lang.localName}).

- Translate every field faithfully and naturally, as a fluent Catholic speaker of ${lang.name} would write. Use the standard Catholic terms of ${lang.name} (for the Mass, sacraments, saints, Mary, the Pope, etc.).
- Do not add, remove or soften anything, and do not add commentary.
- Keep Bible references (e.g. "John 6:53", "1 Cor 11:27"), CCC numbers, dates, Latin/Greek words and the names of people, works and documents exactly as written.
- Keep quotation marks, paragraph breaks (blank lines) and bullet characters (•) where they appear.
- Where a text begins with "Summary:", translate that label too; it marks a paraphrase rather than a quotation.
- Each array must have exactly as many items, in the same order, as the matching English array.`

const sameLengths = (src, out) =>
  out.scripture_notes?.length === src.scripture_notes.length &&
  out.father_texts?.length === src.father_texts.length &&
  out.document_details?.length === src.document_details.length

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: 'Translation is not configured.', code: 'no_key' })

  const id = String(req.query.id || '')
  const lang = LANGUAGES.find(l => l.code === String(req.query.lang || ''))
  const entry = ENTRY_BY_ID[id]
  if (!entry || !lang || BUILT_IN.has(lang.code)) return res.status(400).json({ error: 'Unknown entry or language.' })

  const source = {
    challenge: entry.q,
    answer: entry.a,
    scripture_notes: entry.bible.map(([, note]) => note),
    father_texts: entry.fathers.map(([, , text]) => text),
    document_details: entry.docs.map(([, detail]) => detail),
    respond: entry.say,
  }

  const params = {
    model: MODEL,
    max_tokens: 16000,
    system: systemPrompt(lang),
    messages: [{ role: 'user', content: JSON.stringify(source, null, 1) }],
    output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
  }
  if (!MODEL.includes('haiku')) {
    params.betas = ['server-side-fallback-2026-07-01']
    params.fallbacks = 'default'
  }

  try {
    const msg = await new Anthropic().beta.messages.create(params)
    if (msg.stop_reason === 'refusal') return res.status(422).json({ error: 'Could not translate this answer.' })
    const text = msg.content.filter(b => b.type === 'text').map(b => b.text).join('')
    let out
    try { out = JSON.parse(text) } catch { out = null }
    if (!out || !sameLengths(source, out)) return res.status(502).json({ error: 'Translation came back incomplete. Please try again.' })

    // Translations never change for a given deployment: let Vercel's edge serve repeats.
    res.setHeader('Cache-Control', 'public, s-maxage=31536000, stale-while-revalidate=86400')
    return res.status(200).json({
      t: { q: out.challenge, a: out.answer, b: out.scripture_notes, f: out.father_texts, d: out.document_details, s: out.respond },
      model: msg.model,
    })
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: 'Translation is busy right now. Please try again shortly.' })
    } else if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) {
      return res.status(403).json({ error: 'AI key error. Check ANTHROPIC_API_KEY in your Vercel settings.' })
    } else if (err instanceof Anthropic.BadRequestError) {
      console.error('Translate bad request:', err.message)
      return res.status(400).json({ error: `Claude rejected the request: ${err.error?.error?.message || err.message}` })
    } else if (err instanceof Anthropic.APIError) {
      console.error(`Translate API error ${err.status}:`, err.message)
      return res.status(502).json({ error: 'The translation service had a problem. Please try again.' })
    }
    console.error('Translate error:', err)
    return res.status(500).json({ error: 'Internal server error.' })
  }
}
