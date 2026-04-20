import { useState } from 'react'
import { CATEGORIES, QUICK_TOPICS } from '../data/topics'
import { getUI } from '../data/uiStrings'
import LangPill from './LangPill'

export default function HomeScreen({ lang, isOnline, onSelectLang, onStartCategory, onStartTopic, onAskOwn }) {
  const [input, setInput] = useState('')
  const ui = getUI(lang.code)

  const handleSend = () => {
    if (!input.trim()) return
    onAskOwn(input.trim())
    setInput('')
  }

  return (
    <div className="screen">
      {/* Header */}
      <div className="home-header">
        <div className="header-row">
          <div className="header-spacer" />
          <div className="header-center">
            <span className="cross-icon">✝</span>
            <h1 className="app-title">Catholic Shield</h1>
            <p className="app-subtitle">{ui.subtitle}</p>
            <span className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
              {isOnline ? '🟢 Online — AI Mode' : '📵 Offline Mode'}
            </span>
          </div>
          <LangPill lang={lang} onClick={onSelectLang} />
        </div>
      </div>

      <div className="scroll-area">
        {!isOnline && (
          <div className="offline-banner">
            📵 {lang.code === 'fil'
              ? 'Gumagamit ng built-in na kaalaman. Kumonekta sa internet para sa kumpletong AI na mga sagot.'
              : 'Using built-in knowledge base. Connect to the internet for full AI-powered answers.'}
          </div>
        )}

        <p className="section-label">{ui.choose}</p>
        <div className="category-grid">
          {CATEGORIES.map(cat => (
            <button key={cat.id} className="cat-btn" onClick={() => onStartCategory(cat)}>
              <span className="cat-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <p className="section-label" style={{ marginTop: 18 }}>{ui.attacks}</p>
        <div className="chips-wrap">
          {QUICK_TOPICS.map(t => (
            <button key={t} className="quick-chip" onClick={() => onStartTopic(t)}>{t}</button>
          ))}
        </div>

        <div className="ask-box">
          <p className="ask-label">{ui.askOwn}</p>
          <div className="input-row">
            <textarea
              className="text-input"
              placeholder={ui.placeholder}
              value={input}
              rows={2}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
            />
            <button className="send-btn" disabled={!input.trim()} onClick={handleSend}>➤</button>
          </div>
        </div>

        <p className="footer-verse">{ui.verse}</p>
      </div>
    </div>
  )
}
