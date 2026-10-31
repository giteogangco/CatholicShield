// Turns plain answer text (AI replies, translated answers, verse lookups) into safe HTML,
// styling lines that start with the section emoji markers.

const MARKERS = '⚡✅📖📘📜⛪💬'

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const SECTIONS = [
  ['⚡', 'sch'], ['✅', 'san'], ['📖', 'ssc'], ['📘', 'sccc'], ['📜', 'str'], ['⛪', 'sdoc'], ['💬', 'sre'],
]

export function formatAIResponse(text) {
  let r = escapeHtml(String(text || '').trim())
  // **bold** (AI output sometimes uses it)
  r = r.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
  // Links
  r = r.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>')
  for (const [mark, cls] of SECTIONS) {
    const re = new RegExp(`(^|\\n)\\s*(${mark}[^\\n]*(?:\\n(?!\\s*[${MARKERS}]).*)*)`, 'gu')
    r = r.replace(re, `$1<div class="sec ${cls}">$2</div>`)
  }
  // The section boxes already space themselves; drop blank lines around them.
  r = r.replace(/\s*\n\s*<\/div>/g, '</div>').replace(/<\/div>\s*\n\s*/g, '</div>').replace(/\n\s*(?=<div)/g, '')
  return r.replace(/\n/g, '<br/>')
}
