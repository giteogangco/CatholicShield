import { LANGUAGES } from '../data/languages'

export default function LanguageScreen({ onSelect }) {
  const phLangs   = LANGUAGES.filter(l => l.region === 'ph')
  const intlLangs = LANGUAGES.filter(l => l.region === 'intl')

  return (
    <div className="screen lang-screen">
      {/* Header */}
      <div className="lang-header">
        <span className="cross-icon">✝</span>
        <h1 className="app-title">Catholic Shield</h1>
        <p className="lang-choose-label">CHOOSE YOUR LANGUAGE</p>
        <p className="lang-hint">Piliin ang iyong wika • Select your language</p>
      </div>

      {/* Language grid */}
      <div className="scroll-area">
        <p className="section-label ph-label">
          🇵🇭 MGA WIKANG PILIPINO · PHILIPPINE LANGUAGES
        </p>
        <div className="lang-grid">
          {phLangs.map(l => (
            <button key={l.code} className="lang-btn ph" onClick={() => onSelect(l)}>
              <span className="lang-flag">{l.flag}</span>
              <span className="lang-local">{l.localName}</span>
              <span className="lang-eng">{l.name}</span>
            </button>
          ))}
        </div>

        <p className="section-label" style={{ marginTop: 20 }}>🌐 OTHER LANGUAGES</p>
        <div className="lang-grid">
          {intlLangs.map(l => (
            <button key={l.code} className="lang-btn" onClick={() => onSelect(l)}>
              <span className="lang-flag">{l.flag}</span>
              <span className="lang-local">{l.localName}</span>
              <span className="lang-eng">{l.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
