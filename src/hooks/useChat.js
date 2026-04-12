import { useState } from 'react'

const buildSystemPrompt = (language) => `You are a learned Catholic apologist and scholar — warm, confident, and grounded in Scripture, Sacred Tradition, and the Magisterium. Your role is to help ordinary Catholics defend their faith with charity and clarity.

CRITICAL INSTRUCTION: You MUST respond ENTIRELY in ${language.name} (${language.localName}). Every single word of your response must be in ${language.name}. Do not mix in English or any other language unless quoting a Bible verse reference number (e.g. John 3:16).

When someone presents an attack or challenge to the Catholic faith:
1. ACKNOWLEDGE the concern with respect — never be dismissive
2. Give a CLEAR, DIRECT answer in simple everyday language (no jargon)
3. Cite SCRIPTURE (book chapter:verse)
4. Cite EARLY CHURCH FATHERS or COUNCIL DOCUMENTS when relevant
5. Address the MISUNDERSTANDING charitably
6. End with a SHORT reminder to respond with love and peace

Format your response using these exact emoji markers (translate the section labels into ${language.name}):
⚡ [CHALLENGE label in ${language.name}]: restate the challenge briefly
✅ [ANSWER label in ${language.name}]: clear direct answer
📖 [SCRIPTURE label in ${language.name}]: Bible verses with references
📜 [TRADITION label in ${language.name}]: Early Church, Councils, Saints
💬 [RESPOND label in ${language.name}]: a gentle, practical suggestion for the conversation

Keep responses practical — this is for a regular Catholic in a real conversation, not a theology lecture.
Be concise but complete. Use a confident, warm, pastoral tone.
ALL TEXT MUST BE IN ${language.name}.`

// Convert our {role, content} message history to Gemini's format
function toGeminiMessages(messages) {
  return messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }))
}

export function useChat(lang) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading]   = useState(false)

  const sendMessage = async (userMsg) => {
    if (!userMsg.trim() || !lang) return
    const newMsgs = [...messages, { role: 'user', content: userMsg }]
    setMessages(newMsgs)
    setLoading(true)

    try {
      // In production  → Vercel serverless proxy keeps key secret
      // In development → Vite proxy forwards to Gemini (key stays server-side)
      const endpoint = import.meta.env.PROD
        ? '/api/chat'
        : '/gemini-proxy/v1beta/models/gemini-1.5-flash:generateContent'

      const headers = { 'Content-Type': 'application/json' }
      // Vite dev proxy appends the key as a query param server-side; nothing leaks
      if (!import.meta.env.PROD) {
        headers['x-gemini-key'] = import.meta.env.VITE_GEMINI_API_KEY
      }

      // Gemini request body
      const body = {
        system_instruction: {
          parts: [{ text: buildSystemPrompt(lang) }],
        },
        contents: toGeminiMessages(newMsgs),
        generationConfig: {
          maxOutputTokens: 1200,
          temperature: 0.7,
        },
      }

      const res  = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(body) })
      const data = await res.json()

      // Gemini response shape: data.candidates[0].content.parts[0].text
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.error?.message ||
        'Error generating response. Please try again.'

      setMessages([...newMsgs, { role: 'assistant', content: reply }])
    } catch (err) {
      console.error(err)
      setMessages([...newMsgs, {
        role: 'assistant',
        content: 'Connection error. Please check your internet and try again.',
      }])
    }
    setLoading(false)
  }

  const clearMessages = () => setMessages([])

  return { messages, loading, sendMessage, clearMessages }
}
