import { useState, useRef } from 'react'
import { detectBibleVerse, fetchBibleVerse } from '../data/offlineAnswers'
import { searchKB, relatedFor, getEntry, translateEntry, entryToText, ENTRIES } from '../data/knowledgeBase'

/**
 * Message shapes:
 *   { role: 'user', content }
 *   { role: 'assistant', kind: 'kb', entryId, related: [ids] }          — library answer
 *   { role: 'assistant', kind: 'ai', content, related: [ids] }          — AI answer (grounded)
 *   { role: 'assistant', kind: 'text', content, suggestions?: [ids] }   — verse lookup / fallback
 */

// Plain text of a message, for sending conversation history to the AI.
const messageText = (m) =>
  m.kind === 'kb' ? entryToText(getEntry(m.entryId)) : m.content

const FALLBACK = {
  fil: '📵 Walang eksaktong sagot sa aklatan para dito. Narito ang mga kaugnay na paksa, o subukang itanong sa ibang paraan. Maaari ka ring mag-type ng bersikulo tulad ng "Juan 6:53".',
  ceb: '📵 Walay eksaktong tubag sa librarya para niini. Ania ang mga may kalabutan nga hilisgutan, o sulayi og pangutana sa laing paagi. Mahimo usab ka mag-type og bersikulo sama sa "Juan 6:53".',
  en: '📵 I couldn\'t find an exact answer in the library. Here are the closest topics, or try asking another way. You can also type a Bible verse like "John 6:53".',
}

export function useChat(lang) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  // null = unknown, true = AI endpoint answered, false = not configured / unreachable
  const [aiAvailable, setAiAvailable] = useState(null)
  const messagesRef = useRef(messages)
  messagesRef.current = messages

  const push = (...msgs) => setMessages(prev => [...prev, ...msgs])

  async function askAI(question, results) {
    if (aiAvailable === false) return null
    const context = results.slice(0, 3).map(r => entryToText(r.entry)).join('\n\n=====\n\n')
    const history = messagesRef.current.slice(-6).map(m => ({ role: m.role, content: messageText(m) || '' }))
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, history, language: lang.name, context }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.text) {
        setAiAvailable(true)
        return { text: data.text }
      }
      // 404 (no serverless function, e.g. `vite dev`) or 503 (no key) → AI mode is off.
      if (res.status === 404 || res.status === 503) setAiAvailable(false)
      return { error: data.error }
    } catch {
      setAiAvailable(false)
      return null
    }
  }

  /**
   * Answer a free-text question.
   * forceAI: skip the library match and ask the AI (used by "Ask AI for more" and follow-up chips).
   */
  const sendMessage = async (userMsg, { forceAI = false } = {}) => {
    const text = userMsg.trim()
    if (!text || !lang) return
    push({ role: 'user', content: text })
    setLoading(true)

    try {
      // 1. Bible verse lookup ("John 3:16", "Juan 6", "Psalm 23")
      const verseInfo = detectBibleVerse(text)
      if (verseInfo && !forceAI) {
        const verse = await fetchBibleVerse(verseInfo, lang.code)
        if (verse) {
          push({ role: 'assistant', kind: 'text', content: verse })
          return
        }
      }

      // 2. Library search
      const results = searchKB(text)
      const top = results[0]
      if (!forceAI && top?.confident) {
        await new Promise(r => setTimeout(r, 350)) // natural feel
        push({ role: 'assistant', kind: 'kb', entryId: top.entry.id, related: relatedFor(top.entry, results.slice(1)) })
        return
      }

      // 3. AI mode, grounded on the closest library entries
      const ai = await askAI(text, results)
      if (ai?.text) {
        push({ role: 'assistant', kind: 'ai', content: ai.text, related: results.slice(0, 3).map(r => r.entry.id) })
        return
      }

      // 4. No AI: suggest the closest topics rather than guessing at an answer
      const suggestions = (results.length ? results.map(r => r.entry.id) : ENTRIES.slice(0, 4).map(e => e.id)).slice(0, 4)
      const note = ai?.error ? `⚠️ ${ai.error}\n\n` : ''
      push({ role: 'assistant', kind: 'text', content: note + (FALLBACK[lang.code] || FALLBACK.en), suggestions })
    } finally {
      setLoading(false)
    }
  }

  /** Show a library entry directly (from the Library, a related chip or a suggestion). */
  const openEntry = (id) => {
    const entry = getEntry(id)
    if (!entry) return
    push(
      { role: 'user', content: translateEntry(entry, lang.code).q },
      { role: 'assistant', kind: 'kb', entryId: id, related: relatedFor(entry) },
    )
  }

  const clearMessages = () => setMessages([])

  return { messages, loading, sendMessage, openEntry, clearMessages, aiAvailable }
}
