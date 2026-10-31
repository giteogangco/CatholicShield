/**
 * Vercel Serverless Function — /api/chat
 *
 * Optional "AI mode" for questions the built-in library does not cover.
 * The browser sends the question, recent history, the chosen language and the
 * closest library entries; this function builds a grounded prompt and calls
 * Claude (preferred) or Google Gemini. API keys never reach the browser.
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables):
 *   ANTHROPIC_API_KEY  use Claude (https://platform.claude.com/settings/keys)
 *   CLAUDE_MODEL       optional, defaults to claude-opus-5-5
 *   GEMINI_API_KEY     used only when ANTHROPIC_API_KEY is not set (free key: https://aistudio.google.com/app/apikey)
 *   GEMINI_MODEL       optional, defaults to gemini-2.5-flash
 *
 * Without either key the app still works fully from its built-in library.
 */
import Anthropic from '@anthropic-ai/sdk'

const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'claude-opus-5-5'
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const systemPrompt = (language) => `You are Catholic Shield, a faithful, well-read Catholic apologist helping ordinary Catholics answer questions and objections about the Catholic faith with charity and accuracy.

LANGUAGE: Write your ENTIRE answer in ${language}. Keep Bible references (e.g. John 6:53) and document names as they are.

SOURCES — every answer must be grounded and verifiable:
- Cite Scripture with book chapter:verse.
- Cite the Catechism of the Catholic Church by paragraph number (e.g. CCC 1374).
- Cite Church Fathers with author, work and approximate date; cite councils and papal documents by name and year.
- Prefer the REFERENCE NOTES supplied with the question; they come from the app's verified library.
- Never invent a quotation, paragraph number or document. If you are not certain of an exact quote, summarize it and say "summary". If you do not know, say so plainly.
- Distinguish defined doctrine from theological opinion and from Church discipline (rules that can change).
- If the question is outside Catholic faith and morals, answer briefly and steer back.

TONE: warm, confident, pastoral, never mocking the other side. Give practical words a Catholic can actually say in a real conversation.

FORMAT — use exactly these section markers, each on its own line (translate the labels into ${language}):
⚡ Challenge: one-line restatement of the question or objection
✅ Answer: a clear, direct answer in plain words (2–4 short paragraphs)
📖 Scripture: bullet list "• Reference — what it shows"
📘 Catechism: CCC paragraph numbers with a few words each
📜 Early Church: Fathers or councils, with work and date
⛪ Church documents: council or papal documents (only if relevant)
💬 Respond: one or two gentle sentences to say in the conversation
Keep the whole answer under about 450 words. Do not use Markdown headings or tables.`

function clip(s, n) {
  s = typeof s === 'string' ? s : ''
  return s.length > n ? s.slice(0, n) : s
}

// ── Claude ──────────────────────────────────────────────────────────────────

async function askClaude({ system, turns, prompt }) {
  const client = new Anthropic() // reads ANTHROPIC_API_KEY
  const messages = [
    ...turns.map(t => ({ role: t.role, content: t.text })),
    { role: 'user', content: prompt },
  ]
  const params = {
    model: CLAUDE_MODEL,
    max_tokens: 16000,
    system,
    messages,
    output_config: { effort: 'medium' },
  }
  // If a safety classifier declines, let the API retry on Anthropic's recommended
  // fallback model. Haiku has no server-side fallback.
  if (!CLAUDE_MODEL.includes('haiku')) {
    params.betas = ['server-side-fallback-2026-07-01']
    params.fallbacks = 'default'
  }

  try {
    const msg = await client.beta.messages.create(params)
    if (msg.stop_reason === 'refusal') {
      return { ok: false, status: 422, error: 'The AI could not answer that question. Please rephrase it.' }
    }
    const text = msg.content.filter(b => b.type === 'text').map(b => b.text).join('').trim()
    return text ? { ok: true, text, model: msg.model } : { ok: false, status: 502, error: 'The AI returned no answer. Please try again.' }
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return { ok: false, status: 429, error: 'The AI is busy right now. Please wait a moment and try again.' }
    } else if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) {
      return { ok: false, status: 403, error: 'AI key error. Check ANTHROPIC_API_KEY in your Vercel settings.' }
    } else if (err instanceof Anthropic.BadRequestError) {
      console.error('Claude bad request:', err.message)
      return { ok: false, status: 400, error: 'The AI could not process that question. Please rephrase it.' }
    } else if (err instanceof Anthropic.APIError) {
      console.error(`Claude API error ${err.status}:`, err.message)
      return { ok: false, status: 502, error: 'The AI service had a problem. Please try again.' }
    }
    throw err
  }
}

// ── Gemini ──────────────────────────────────────────────────────────────────

async function askGemini({ system, turns, prompt }) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`
  const body = {
    system_instruction: { parts: [{ text: system }] },
    contents: [
      ...turns.map(t => ({ role: t.role === 'assistant' ? 'model' : 'user', parts: [{ text: t.text }] })),
      { role: 'user', parts: [{ text: prompt }] },
    ],
    generationConfig: { maxOutputTokens: 4096, temperature: 0.4 },
  }

  for (let attempt = 0; ; attempt++) {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
      body: JSON.stringify(body),
    })
    const data = await upstream.json().catch(() => ({}))
    if (upstream.ok) {
      const text = (data?.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('').trim()
      return text ? { ok: true, text, model: GEMINI_MODEL } : { ok: false, status: 502, error: 'The AI returned no answer. Please try again.' }
    }
    if ((upstream.status === 429 || upstream.status === 503) && attempt < 2) {
      await sleep(Math.min(2 ** attempt * 1500, 6000))
      continue
    }
    const status = upstream.status
    const error =
      status === 429 ? 'The AI is busy right now. Please wait a moment and try again.'
      : status === 400 ? 'The AI could not process that question. Please rephrase it.'
      : status === 403 ? 'AI key error. Check GEMINI_API_KEY in your Vercel settings.'
      : 'The AI service had a problem. Please try again.'
    return { ok: false, status: status || 502, error }
  }
}

// ── Handler ─────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const provider = process.env.ANTHROPIC_API_KEY ? 'claude' : process.env.GEMINI_API_KEY ? 'gemini' : null
  if (!provider) return res.status(503).json({ error: 'AI mode is not configured.', code: 'no_key' })

  const { question, history, language, context } = req.body || {}
  const q = clip(question, 2000).trim()
  if (!q) return res.status(400).json({ error: 'Missing question.' })

  const turns = (Array.isArray(history) ? history : [])
    .slice(-6)
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .map(m => ({ role: m.role, text: clip(m.content, 3000) }))
  // Conversations must start with a user turn.
  while (turns.length && turns[0].role !== 'user') turns.shift()

  const notes = clip(context, 14000)
  const prompt = notes
    ? `REFERENCE NOTES (from the Catholic Shield library — use and cite these where relevant):\n${notes}\n\n---\nQUESTION: ${q}`
    : `QUESTION: ${q}`
  const system = systemPrompt(clip(language, 60) || 'English')

  try {
    const result = provider === 'claude'
      ? await askClaude({ system, turns, prompt })
      : await askGemini({ system, turns, prompt })
    if (!result.ok) return res.status(result.status).json({ error: result.error })
    return res.status(200).json({ text: result.text, model: result.model })
  } catch (error) {
    console.error('AI proxy error:', error)
    return res.status(500).json({ error: 'Internal server error. Please try again.' })
  }
}
