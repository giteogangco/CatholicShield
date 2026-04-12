/**
 * Vercel Serverless Function — /api/chat
 *
 * Secure proxy: browser never sees your Gemini API key.
 * Set GEMINI_API_KEY in your Vercel project environment variables.
 *
 * FREE tier: 15 req/min · 1,500 req/day · No credit card needed
 * Get your key → https://aistudio.google.com/app/apikey
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not set on server.' })
  }

  const model    = 'gemini-1.5-flash'
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

  try {
    const upstream = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(req.body),
    })

    const data = await upstream.json()

    if (!upstream.ok) {
      return res.status(upstream.status).json(data)
    }

    return res.status(200).json(data)
  } catch (error) {
    console.error('Proxy error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
