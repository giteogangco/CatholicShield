import { useState } from 'react'
import { getCategories, getQuickTopics } from '../data/topics'
import { getUI } from '../data/uiStrings'
import LangPill from './LangPill'

export default function HomeScreen({ lang, onSelectLang, onStartCategory, onStartTopic, onAskOwn }) {
    const [input, setInput] = useState('')
    const ui = getUI(lang.code)
    const categories = getCategories(lang.code)
    const quickTopics = getQuickTopics(lang.code)

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
                                            <span className="cross-icon">✝</span>span>
                                            <h1 className="app-title">Catholic Shield</h1>h1>
                                            <p className="app-subtitle">{ui.subtitle}</p>p>
                                </div>div>
                                <LangPill lang={lang} onClick={onSelectLang} />
                      </div>div>
              </div>div>
        
          {/* Body */}
              <div className="scroll-area">
                {/* Categories */}
                      <p className="section-label">{ui.choose}</p>p>
                      <div className="category-grid">
                        {categories.map(cat => (
                      <button key={cat.id} className="cat-btn" onClick={() => onStartCategory(cat)}>
                                    <span className="cat-icon">{cat.icon}</span>span>
                        {cat.label}
                      </button>button>
                    ))}
                      </div>div>
              
                {/* Quick chips */}
                      <p className="section-label" style={{ marginTop: 18 }}>{ui.attacks}</p>p>
                      <div className="chips-wrap">
                        {quickTopics.map(t => (
                      <button key={t} className="quick-chip" onClick={() => onStartTopic(t)}>{t}</button>button>
                    ))}
                      </div>div>
              
                {/* Custom question */}
                      <div className="ask-box">
                                <p className="ask-label">{ui.askOwn}</p>p>
                                <div className="input-row">
                                            <textarea
                                                            className="text-input"
                                                            placeholder={ui.placeholder}
                                                            value={input}
                                                            rows={2}
                                                            onChange={e => setInput(e.target.value)}
                                                            onKeyDown={handleKey}
                                                          />
                                            <button className="send-btn" disabled={!input.trim()} onClick={handleSend}>➤</button>button>
                                </div>div>
                      </div>div>
              
                {/* Bible verse */}
                      <p className="footer-verse">{ui.verse}</p>p>
              </div>div>
        </div>div>
      )
}</div>
