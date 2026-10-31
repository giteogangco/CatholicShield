import { useState } from 'react'
import { getCategories, getQuickTopics } from '../data/topics'
import { getUI } from '../data/uiStrings'
import { ENTRIES } from '../data/knowledgeBase'
import LangPill from './LangPill'

export default function HomeScreen({ lang, onSelectLang, onBrowse, onStartTopic, onAskOwn }) {
  const [input, setInput] = useState('')
  const ui = getUI(lang.code)
  const categories = getCategories(lang.code)
  const quickTopics = getQuickTopics(lang.code)
  const countIn = (id) => ENTRIES.filter(e => e.cat === id).length

  const handleSend = () => {
    if (!input.trim()) return
    onAskOwn(input.trim())
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
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
          </div>
          <LangPill lang={lang} onClick={onSelectLang} />
        </div>
      </div>

      {/* Body */}
      <div className="scroll-area">
        {/* Custom question */}
        <div className="ask-box" style={{ marginTop: 0, marginBottom: 18 }}>
          <p className="ask-label">{ui.askOwn}</p>
          <div className="input-row">
            <textarea
              className="text-input"
              placeholder={ui.placeholder}
              value={input}
              rows={2}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className="send-btn" disabled={!input.trim()} onClick={handleSend}>➤</button>
          </div>
        </div>

        <button className="browse-btn" onClick={() => onBrowse('all')}>
          {ui.browseAll.replace('{n}', ENTRIES.length)}
        </button>

        {/* Categories */}
        <p className="section-label" style={{ marginTop: 18 }}>{ui.choose}</p>
        <div className="category-grid">
          {categories.filter(cat => countIn(cat.id) > 0).map(cat => (
            <button key={cat.id} className="cat-btn" onClick={() => onBrowse(cat.id)}>
              <span className="cat-icon">{cat.icon}</span>
              {cat.label}
              <span className="cat-count">{countIn(cat.id)}</span>
            </button>
          ))}
        </div>

        {/* Quick chips */}
        <p className="section-label" style={{ marginTop: 18 }}>{ui.attacks}</p>
        <div className="chips-wrap">
          {quickTopics.map(t => (
            <button key={t} className="quick-chip" onClick={() => onStartTopic(t)}>{t}</button>
          ))}
        </div>

        {/* Bible verse */}
        <p className="footer-verse">{ui.verse}</p>
      </div>
    </div>
  )
}
