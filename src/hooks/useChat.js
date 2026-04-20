import { useState, useEffect } from 'react'
import { findOfflineAnswer } from '../data/offlineAnswers'

// ── Network status hook ───────────────────────────────────────
export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    useEffect(() => {
          const on = () => setIsOnline(true)
          const off = () => setIsOnline(false)
          window.addEventListener('online', on)
          window.addEventListener('offline', off)
          return () => {
                  window.removeEventListener('online', on)
                  window.removeEventListener('offline', off)
          }
    }, [])
    return isOnline
}

// ── Main chat hook (fully offline — no API required) ─────────
export function useChat(lang) {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)

  const sendMessage = async (userMsg) => {
        if (!userMsg.trim() || !lang) return
        const newMsgs = [...messages, { role: 'user', content: userMsg }]
        setMessages(newMsgs)
        setLoading(true)

        // Simulate a short thinking delay for natural feel
        await new Promise((r) => setTimeout(r, 600))

        const offlineReply = findOfflineAnswer(userMsg, lang.code)
        const reply =
                offlineReply ||
                (lang.code === 'fil'
                         ? '📵 Walang nahanap na sagot para sa tanong na ito sa lokal na database. Subukan ang isa pang paraan ng pagtatanong.'
                         : '📵 No matching answer found for that question in the local database. Try rephrasing your question.')

        setMessages([...newMsgs, { role: 'assistant', content: reply }])
        setLoading(false)
  }

  const clearMessages = () => setMessages([])

  return { messages, loading, sendMessage, clearMessages, isOnline: true }
}
