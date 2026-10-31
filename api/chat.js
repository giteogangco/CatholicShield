/**
 * Vercel Serverless Function — /api/chat
 *
 * Optional "AI mode" for questions the built-in library does not cover.
 * The browser sends the question, recent history, the chosen language and the
 * closest library entries; this function builds a grounded prompt and calls
 * Google Gemini. Your API key never reaches the browser.
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables):
 *   GEMINI_API_KEY   required to enable AI mode (free key: https://aistudio.google.com/app/apikey)
 *   GEMINI_MODEL     optional, defaults to gemini-2.5-flash
 *
 * Without GEMINI_API_KEY the app still works fully from its built-in library.
 */

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

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

async function callGemini(apiKey, body, maxRetries = 2) {
  for (let attempt = 0; ; attempt++) {
    const upstream = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify(body),
    })
    const data = await upstream.json().catch(() => ({}))
    if (upstream.ok) return { ok: true, data }
    if ((upstream.status === 429 || upstream.status === 503) && attempt < maxRetries) {
      await sleep(Math.min(2 ** attempt * 1500, 6000))
      continue
    }
    return { ok: false, status: upstream.status, data }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) return res.status(503).json({ error: 'AI mode is not configured.', code: 'no_key' })

  const { question, history, language, context } = req.body || {}
  const q = clip(question, 2000).trim()
  if (!q) return res.status(400).json({ error: 'Missing question.' })

  const turns = (Array.isArray(history) ? history : [])
    .slice(-6)
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: clip(m.content, 3000) }] }))
  // Gemini requires the conversation to start with a user turn.
  while (turns.length && turns[0].role !== 'user') turns.shift()

  const notes = clip(context, 14000)
  const prompt = notes
    ? `REFERENCE NOTES (from the Catholic Shield library — use and cite these where relevant):\n${notes}\n\n---\nQUESTION: ${q}`
    : `QUESTION: ${q}`

  const body = {
    system_instruction: { parts: [{ text: systemPrompt(clip(language, 60) || 'English') }] },
    contents: [...turns, { role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { maxOutputTokens: 4096, temperature: 0.4 },
  }

  try {
    const result = await callGemini(apiKey, body)
    if (!result.ok) {
      const status = result.status
      const error =
        status === 429 ? 'The AI is busy right now. Please wait a moment and try again.'
        : status === 400 ? 'The AI could not process that question. Please rephrase it.'
        : status === 403 ? 'AI key error. Check GEMINI_API_KEY in your Vercel settings.'
        : 'The AI service had a problem. Please try again.'
      return res.status(status || 502).json({ error })
    }
    const text = (result.data?.candidates?.[0]?.content?.parts || [])
      .map(p => p.text || '')
      .join('')
      .trim()
    if (!text) return res.status(502).json({ error: 'The AI returned no answer. Please try again.' })
    return res.status(200).json({ text, model: MODEL })
  } catch (error) {
    console.error('AI proxy error:', error)
    return res.status(500).json({ error: 'Internal server error. Please try again.' })
  }
}
