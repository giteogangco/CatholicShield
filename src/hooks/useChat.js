import { useState, useEffect } from 'react'
import { findOfflineAnswer, detectBibleVerse, fetchBibleVerse } from '../data/offlineAnswers'

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

// ── Main chat hook ─────────────────────────────────────────────
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

        let reply = null

        // 1. Check if query is a Bible verse reference
        const verseInfo = detectBibleVerse(userMsg)
        if (verseInfo) {
          reply = await fetchBibleVerse(verseInfo, lang.code)
        }

        // 2. Check offline apologetics knowledge base
        if (!reply) {
          reply = findOfflineAnswer(userMsg, lang.code)
        }

        // 3. Default fallback message
        if (!reply) {
          const isCeb = ['ceb', 'tl', 'ilo', 'hil', 'war', 'bik', 'kpm', 'tsg'].includes(lang.code)
          const isFil = lang.code === 'fil'
          if (isFil) {
            reply = '📵 Walang nahanap na sagot para sa tanong na ito sa lokal na database. Subukan ang isa pang paraan ng pagtatanong. Maaari ka ring mag-type ng Bible verse tulad ng "Juan 3:16" o "Salmo 23".'
          } else if (isCeb) {
            reply = '📵 Wala makit-an nga tubag sa lokal nga database. Sulayan ang laing paagi sa pagpangutana. Mahimo usab ka mag-type og Bible verse sama sa "Juan 3:16" o "Sal 23".'
          } else {
            reply = '📵 No matching answer found for that question in the local database. Try rephrasing your question. You can also search Bible verses like "John 3:16" or "Psalm 23".'
          }
        }

        setMessages([...newMsgs, { role: 'assistant', content: reply }])
        setLoading(false)
  }

  const clearMessages = () => setMessages([])

  return { messages, loading, sendMessage, clearMessages, isOnline: true }
}
