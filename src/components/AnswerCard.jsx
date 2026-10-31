import { useState } from 'react'
import { getEntry, localizedAnswer, hasTranslation, translateEntry, localizeRef, entryToText, bibleUrl, cccUrl } from '../data/knowledgeBase'
import { formatAIResponse } from './formatText'

// "Acts 16:15, 33" → "Acts 16:15" so the in-app verse lookup can read it.
const lookupRef = (ref) => ref.split(/[,;&]/)[0].replace(/–/g, '-').trim()

function Section({ cls, icon, title, children }) {
  return (
    <div className={`sec ${cls}`}>
      <div className="sec-title">{icon} {title}</div>
      {children}
    </div>
  )
}

export default function AnswerCard({ message, ui, langCode, aiAvailable, onReadVerse, onOpenEntry, onAskAI }) {
  const base = getEntry(message.entryId)
  const [copied, setCopied] = useState(false)
  const [showEnglish, setShowEnglish] = useState(false)
  // A full translation replaces the whole card; otherwise a shorter translated answer
  // (older entries) is shown above the English card.
  const translated = hasTranslation(base, langCode)
  const localized = translated ? null : localizedAnswer(base, langCode)
  const [showFull, setShowFull] = useState(!localized)
  if (!base) return null

  const shownLang = translated && !showEnglish ? langCode : 'en'
  const entry = translateEntry(base, shownLang)
  const text = entryToText(base, shownLang)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard unavailable */ }
  }

  const share = async () => {
    try { await navigator.share({ title: 'Catholic Shield', text }) } catch { /* cancelled */ }
  }

  return (
    <div className="ai-bubble answer-card">
      {translated && (
        <button className="toggle-full" onClick={() => setShowEnglish(s => !s)}>
          {showEnglish ? ui.showLocal : ui.showEnglish}
        </button>
      )}

      {localized && (
        <div dangerouslySetInnerHTML={{ __html: formatAIResponse(localized) }} />
      )}

      {localized && (
        <button className="toggle-full" onClick={() => setShowFull(s => !s)}>
          {showFull ? '▾' : '▸'} {ui.englishRefs}
        </button>
      )}

      {showFull && (
        <>
          <Section cls="sch" icon="⚡" title={ui.challenge}>
            <p>{entry.q}</p>
          </Section>

          <Section cls="san" icon="✅" title={ui.answer}>
            {entry.a.split('\n\n').map((p, i) => <p key={i} className="para">{p}</p>)}
          </Section>

          {entry.bible.length > 0 && (
            <Section cls="ssc" icon="📖" title={ui.scriptureH}>
              <p className="hint">{ui.tapVerse}</p>
              <ul className="ref-list">
                {entry.bible.map(([ref, note]) => (
                  <li key={ref}>
                    <button className="ref-btn" onClick={() => onReadVerse(lookupRef(ref))}>{localizeRef(ref, shownLang)}</button>
                    <a className="ext" href={bibleUrl(lookupRef(ref), shownLang)} target="_blank" rel="noreferrer" aria-label={`Open ${ref} on Bible Gateway`}>↗</a>
                    <span className="ref-note"> — {note}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {entry.ccc.length > 0 && (
            <Section cls="sccc" icon="📘" title={ui.catechism}>
              <div className="ccc-row">
                {entry.ccc.map(n => (
                  <a key={n} className="ccc-chip" href={cccUrl(n)} target="_blank" rel="noreferrer">CCC {n}</a>
                ))}
              </div>
            </Section>
          )}

          {entry.fathers.length > 0 && (
            <Section cls="str" icon="📜" title={ui.fathers}>
              <ul className="ref-list">
                {entry.fathers.map(([who, src, quote]) => (
                  <li key={who + src}>
                    <strong>{who}</strong>, <em>{src}</em>
                    <div className="quote">{quote}</div>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {entry.docs.length > 0 && (
            <Section cls="sdoc" icon="⛪" title={ui.documents}>
              <ul className="ref-list">
                {entry.docs.map(([title, detail, url]) => (
                  <li key={title}>
                    {url
                      ? <a href={url} target="_blank" rel="noreferrer"><strong>{title}</strong> ↗</a>
                      : <strong>{title}</strong>}
                    <div className="ref-note">{detail}</div>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section cls="sre" icon="💬" title={ui.respond}>
            <p>{entry.say}</p>
          </Section>
        </>
      )}

      <div className="card-actions">
        <button className="quick-chip small" onClick={copy}>{copied ? ui.copied : ui.copy}</button>
        {typeof navigator !== 'undefined' && navigator.share && (
          <button className="quick-chip small" onClick={share}>{ui.share}</button>
        )}
        {aiAvailable !== false && (
          <button className="quick-chip small" onClick={() => onAskAI(base.q)}>{ui.askAI}</button>
        )}
      </div>

      {message.related?.length > 0 && (
        <div className="related">
          <p className="related-title">{ui.related}</p>
          {message.related.map(id => {
            const r = getEntry(id)
            return r && (
              <button key={id} className="related-btn" onClick={() => onOpenEntry(id)}>{translateEntry(r, langCode).q}</button>
            )
          })}
        </div>
      )}
    </div>
  )
}
