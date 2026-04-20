import { useRef, useEffect, useState } from 'react'
import { getUI } from '../data/uiStrings'
import LangPill from './LangPill'
import MessageBubble from './MessageBubble'

export default function ChatScreen({ lang, messages, loading, isOnline, onSend, onHome, onSelectLang }) {
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)
  const ui = getUI(lang.code)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = (msg) => {
    const text = typeof msg === 'string' ? msg.trim() : input.trim()
    if (!text) return
    onSend(text)
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  const quickActions = [ui.fresh, ui.scripture, ui.early, ui.simple]
  const consultingText = isOnline ? ui.consulting : (ui.consultingOffline || '📵 Searching offline knowledge base...')

  return (
    <div className="screen chat-screen">
      {/* Top bar */}
      <div className="chat-header">
        <button className="back-btn" onClick={onHome}>{ui.home}</button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <span className="chat-title">✝ Catholic Shield</span>
          <span className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
            {isOnline ? '🟢 Online' : '📵 Offline Mode'}
          </span>
        </div>
        <LangPill lang={lang} onClick={onSelectLang} />
      </div>

      {/* Messages */}
      <div className="chat-area">
        {messages.length === 0 && (
          <div className="empty-chat">
            <div className="empty-icon">✝️</div>
            <p>{ui.emptyMsg}</p>
            {!isOnline && (
              <div className="offline-notice">
                📵 {lang.code === 'fil'
                  ? 'Offline mode — gumagamit ng built-in na kaalaman. Kumonekta sa internet para sa buong AI na sagot.'
                  : 'Offline mode — using built-in knowledge base. Connect to the internet for full AI responses.'}
              </div>
            )}
          </div>
        )}

        {messages.map((msg, i) => <MessageBubble key={i} message={msg} />)}

        {loading && (
          <div className="msg-bubble assistant">
            <div className="ai-bubble">
              <p className="consulting-text">{consultingText}</p>
              <div className="dots">
                <div className="dot" /><div className="dot" /><div className="dot" />
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <div className="input-row">
          <textarea
            className="text-input"
            placeholder={ui.chatPh}
            value={input}
            rows={1}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
          />
          <button className="send-btn" disabled={!input.trim() || loading} onClick={() => handleSend()}>➤</button>
        </div>
        <div className="chips-row">
          {quickActions.map(q => (
            <button key={q} className="quick-chip small" onClick={() => handleSend(q)}>{q}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
