/**
 * Vercel Serverless Function — /api/chat
 *
 * Secure proxy: browser never sees your Gemini API key.
 * Set GEMINI_API_KEY in your Vercel project environment variables.
 *
 * FREE tier (gemini-1.5-flash): 15 req/min · 1,500 req/day · No credit card needed
 * Get your key → https://aistudio.google.com/app/apikey
 */

const MODEL = 'gemini-1.5-flash'
const BASE_URL = 'https://generativelanguage.googleapis.com/v1/models'

// Sleep helper
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Call Gemini with up to `maxRetries` auto-retries on 429 rate-limit errors
async function callGemini(apiKey, body, maxRetries = 3) {
    const endpoint = `${BASE_URL}/${MODEL}:generateContent?key=${apiKey}`

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
        const upstream = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
        })

      // Success
      if (upstream.ok) {
              return { ok: true, status: 200, data: await upstream.json() }
      }

      const data = await upstream.json()

      // Rate-limited — wait then retry
      if (upstream.status === 429 && attempt < maxRetries) {
              // Try to read retry-after from response, else use exponential backoff
          const retryAfter = data?.error?.details
                ?.find((d) => d.retryDelay)
                ?.retryDelay
              const waitMs = retryAfter
                ? parseFloat(retryAfter) * 1000
                        : Math.min(2 ** attempt * 1500, 10000)
              await sleep(waitMs)
              continue
      }

      // Other error (or out of retries on 429)
      return { ok: false, status: upstream.status, data }
  }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' })
    }

  const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
          return res.status(500).json({ error: 'GEMINI_API_KEY not set on server.' })
    }

  try {
        const result = await callGemini(apiKey, req.body)

      if (!result.ok) {
              // Return a friendly message instead of raw API error
          const status = result.status
              let friendlyError = result.data?.error?.message || 'API error'

          if (status === 429) {
                    friendlyError =
                                'The app is receiving too many requests right now. Please wait a moment and try again.'
          } else if (status === 400) {
                    friendlyError = 'Invalid request. Please try rephrasing your question.'
          } else if (status === 403) {
                    friendlyError =
                                'API key error. Please check your GEMINI_API_KEY in Vercel settings.'
          }

          return res.status(status).json({ error: friendlyError })
      }

      return res.status(200).json(result.data)
  } catch (error) {
        console.error('Proxy error:', error)
        return res.status(500).json({ error: 'Internal server error. Please try again.' })
  }
}
