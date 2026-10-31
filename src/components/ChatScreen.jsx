import { useRef, useEffect, useState } from 'react'
import { getUI } from '../data/uiStrings'
import LangPill from './LangPill'
import MessageBubble from './MessageBubble'

export default function ChatScreen({ lang, messages, loading, aiAvailable, onSend, onAskAI, onReadVerse, onOpenEntry, onClear, onLibrary, onHome, onSelectLang }) {
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)
  const ui = getUI(lang.code)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return
    onSend(text)
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Follow-up chips need the AI (they refer to the previous answer); hide them when it is off.
  const followUps = aiAvailable === false ? [] : [ui.scripture, ui.early, ui.simple]
  const hasAnswer = messages.some(m => m.role === 'assistant')

  return (
    <div className="screen chat-screen">
      {/* Top bar */}
      <div className="chat-header">
        <button className="back-btn" onClick={onHome}>{ui.home}</button>
        <span className="chat-title">✝ Catholic Shield</span>
        <LangPill lang={lang} onClick={onSelectLang} />
      </div>

      {/* Messages */}
      <div className="chat-area">
        {messages.length === 0 && (
          <div className="empty-chat">
            <div className="empty-icon">✝️</div>
            <p>{ui.emptyMsg}</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            message={msg}
            ui={ui}
            langCode={lang.code}
            aiAvailable={aiAvailable}
            onReadVerse={onReadVerse}
            onOpenEntry={onOpenEntry}
            onAskAI={onAskAI}
          />
        ))}

        {loading && (
          <div className="msg-bubble assistant">
            <div className="ai-bubble">
              <p className="consulting-text">{ui.consulting}</p>
              <div className="dots">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
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
          <button
            className="send-btn"
            disabled={!input.trim() || loading}
            onClick={handleSend}
          >
            ➤
          </button>
        </div>

        {/* Quick action chips */}
        <div className="chips-row">
          <button className="quick-chip small" onClick={onLibrary}>{ui.library}</button>
          <button className="quick-chip small" onClick={onClear}>{ui.fresh}</button>
          {hasAnswer && followUps.map(q => (
            <button key={q} className="quick-chip small" disabled={loading} onClick={() => onAskAI(q)}>
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
