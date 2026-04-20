import { useState, useEffect } from 'react'
import { findOfflineAnswer } from '../data/offlineAnswers'

// ── System prompt for Gemini online mode ──────────────────────
const buildSystemPrompt = (language) =>
  `You are a learned Catholic apologist and scholar — warm, confident, and grounded in Scripture, Sacred Tradition, and the Magisterium. Your role is to help ordinary Catholics defend their faith with charity and clarity.

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

// Convert message history to Gemini format
function toGeminiMessages(messages) {
  return messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }))
}

// ── Network check ──────────────────────────────────────────────
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  useEffect(() => {
    const on  = () => setIsOnline(true)
    const off = () => setIsOnline(false)
    window.addEventListener('online',  on)
    window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])
  return isOnline
}

// ── Main chat hook ─────────────────────────────────────────────
export function useChat(lang) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading]   = useState(false)
  const isOnline = useOnlineStatus()

  const sendMessage = async (userMsg) => {
    if (!userMsg.trim() || !lang) return
    const newMsgs = [...messages, { role: 'user', content: userMsg }]
    setMessages(newMsgs)
    setLoading(true)

    // ── OFFLINE: use built-in knowledge base ──────────────────
    if (!isOnline) {
      await new Promise(r => setTimeout(r, 600)) // natural feel
      const offlineReply = findOfflineAnswer(userMsg, lang.code)
      const reply = offlineReply ||
        (lang.code === 'fil'
          ? '📵 Offline mode: Walang nahanap na sagot para sa tanong na ito. Subukan ang isa pang paraan ng pagtatanong, o kumonekta sa internet para sa kumpletong AI na tugon.'
          : '📵 Offline mode: No matching answer found for that question. Try rephrasing, or go online for a full AI response.')
      setMessages([...newMsgs, { role: 'assistant', content: reply }])
      setLoading(false)
      return
    }

    // ── ONLINE: call Gemini API ────────────────────────────────
    try {
      const endpoint = import.meta.env.PROD
        ? '/api/chat'
        : '/gemini-proxy/v1beta/models/gemini-1.5-flash:generateContent'

      const headers = { 'Content-Type': 'application/json' }
      if (!import.meta.env.PROD) {
        headers['x-gemini-key'] = import.meta.env.VITE_GEMINI_API_KEY
      }

      const body = {
        system_instruction: { parts: [{ text: buildSystemPrompt(lang) }] },
        contents: toGeminiMessages(newMsgs),
        generationConfig: { maxOutputTokens: 1200, temperature: 0.7 },
      }

      const res  = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(body) })
      const data = await res.json()
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.error?.message ||
        'Error generating response. Please try again.'
      setMessages([...newMsgs, { role: 'assistant', content: reply }])
    } catch {
      // If Gemini fails, fall back to offline knowledge base
      const offlineReply = findOfflineAnswer(userMsg, lang.code)
      const reply = offlineReply ||
        'Connection error. Please check your internet and try again.'
      setMessages([...newMsgs, { role: 'assistant', content: reply }])
    }
    setLoading(false)
  }

  const clearMessages = () => setMessages([])

  return { messages, loading, sendMessage, clearMessages, isOnline }
}
