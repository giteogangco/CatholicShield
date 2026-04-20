// Small language switcher pill shown in the top-right corner

export default function LangPill({ lang, onClick }) {
  return (
    <button className="lang-pill" onClick={onClick} aria-label="Change language">
      <span style={{ fontSize: '1.2rem' }}>{lang.flag}</span>
      <span className="lang-pill-name">{lang.name}</span>
    </button>
  )
}
