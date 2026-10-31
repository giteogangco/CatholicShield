import { useState, useMemo } from 'react'
import { getCategories } from '../data/topics'
import { getUI } from '../data/uiStrings'
import { ENTRIES, searchKB, translateEntry } from '../data/knowledgeBase'
import LangPill from './LangPill'

// Browse every library answer by category, or search them.
export default function LibraryScreen({ lang, initialCat, onOpen, onHome, onSelectLang }) {
  const ui = getUI(lang.code)
  const categories = getCategories(lang.code).filter(c => ENTRIES.some(e => e.cat === c.id))
  const iconFor = Object.fromEntries(categories.map(c => [c.id, c.icon]))
  const [cat, setCat] = useState(initialCat || 'all')
  const [query, setQuery] = useState('')

  const list = useMemo(() => {
    if (query.trim()) return searchKB(query, 30).map(r => r.entry)
    return cat === 'all' ? ENTRIES : ENTRIES.filter(e => e.cat === cat)
  }, [cat, query])

  return (
    <div className="screen chat-screen">
      <div className="chat-header">
        <button className="back-btn" onClick={onHome}>{ui.home}</button>
        <span className="chat-title">{ui.library}</span>
        <LangPill lang={lang} onClick={onSelectLang} />
      </div>

      <div className="library-tools">
        <input
          className="text-input lib-search"
          type="search"
          placeholder={ui.searchLib.replace('{n}', ENTRIES.length)}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {!query.trim() && (
          <div className="chips-row">
            <button className={`quick-chip small ${cat === 'all' ? 'active' : ''}`} onClick={() => setCat('all')}>
              {ui.all} ({ENTRIES.length})
            </button>
            {categories.map(c => (
              <button key={c.id} className={`quick-chip small ${cat === c.id ? 'active' : ''}`} onClick={() => setCat(c.id)}>
                {c.icon} {c.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="scroll-area">
        {list.length === 0 && <p className="empty-chat">{ui.noResults}</p>}
        {list.map(e => (
          <button key={e.id} className="lib-item" onClick={() => onOpen(e.id)}>
            <span className="lib-icon">{iconFor[e.cat] || '✝'}</span>
            <span className="lib-q">{translateEntry(e, lang.code).q}</span>
            <span className="lib-meta">
              {e.bible.length} 📖 · {e.ccc.length} 📘{e.fathers.length ? ` · ${e.fathers.length} 📜` : ''}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
