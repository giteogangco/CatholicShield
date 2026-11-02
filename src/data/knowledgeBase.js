/**
 * knowledgeBase.js — the structured apologetics library and its search engine.
 *
 * Entries live in src/data/kb/*.js. Each entry may name a `legacy` keyword that links
 * it to a multilingual answer in offlineAnswers.js; that entry's keywords are merged in
 * (so Cebuano/Filipino/Spanish questions find it) and its translations are attached
 * as `localized`.
 */
import { LEGACY_KB } from './offlineAnswers'
import scripture from './kb/scripture'
import mary from './kb/mary'
import church from './kb/church'
import sacraments from './kb/sacraments'
import salvation from './kb/salvation'
import god from './kb/god'
import morality from './kb/morality'
import history from './kb/history'
import cebScripture from './kb/ceb/scripture'
import cebMary from './kb/ceb/mary'
import cebChurch from './kb/ceb/church'
import cebSacraments from './kb/ceb/sacraments'
import cebSalvation from './kb/ceb/salvation'
import cebGod from './kb/ceb/god'
import cebMorality from './kb/ceb/morality'
import cebHistory from './kb/ceb/history'
import filScripture from './kb/fil/scripture'
import filMary from './kb/fil/mary'
import filChurch from './kb/fil/church'
import filSacraments from './kb/fil/sacraments'
import filSalvation from './kb/fil/salvation'
import filGod from './kb/fil/god'
import filMorality from './kb/fil/morality'
import filHistory from './kb/fil/history'

const legacyByKey = new Map(LEGACY_KB.map(e => [e.keywords[0], e]))

/** Full translations of entries, by language code then entry id (shape: see kb/ceb/scripture.js). */
const TRANSLATIONS = {
  ceb: { ...cebScripture, ...cebMary, ...cebChurch, ...cebSacraments, ...cebSalvation, ...cebGod, ...cebMorality, ...cebHistory },
  fil: { ...filScripture, ...filMary, ...filChurch, ...filSacraments, ...filSalvation, ...filGod, ...filMorality, ...filHistory },
}

export const ENTRIES = [...scripture, ...mary, ...church, ...sacraments, ...salvation, ...god, ...morality, ...history]
  .map(e => {
    const old = e.legacy && legacyByKey.get(e.legacy)
    return { ...e, kw: old ? [...e.kw, ...old.keywords] : e.kw, localized: old ? old.answers : null }
  })

export const ENTRY_BY_ID = Object.fromEntries(ENTRIES.map(e => [e.id, e]))

export const getEntry = (id) => ENTRY_BY_ID[id] || null

export const entriesInCategory = (cat) => ENTRIES.filter(e => e.cat === cat)

/** Translated answer text for a language, if the legacy KB has one (never falls back to English). */
export const localizedAnswer = (entry, langCode) =>
  langCode !== 'en' && entry?.localized?.[langCode] ? entry.localized[langCode] : null

export const hasTranslation = (entry, langCode) => !!TRANSLATIONS[langCode]?.[entry?.id]

/** Languages whose translations are written into the app (others are translated by AI on demand). */
export const BUILT_IN_LANGS = new Set(['en', ...Object.keys(TRANSLATIONS)])

/**
 * Add a translation produced at runtime (see aiTranslations.js). Ignored if its lists
 * don't line up with the English entry, so a bad response can never scramble references.
 */
export function registerTranslation(langCode, id, t) {
  const e = ENTRY_BY_ID[id]
  if (!e || BUILT_IN_LANGS.has(langCode) || !t || typeof t.q !== 'string' || typeof t.a !== 'string') return false
  if (t.b?.length !== e.bible.length || t.f?.length !== e.fathers.length || t.d?.length !== e.docs.length) return false
  ;(TRANSLATIONS[langCode] ||= {})[id] = t
  return true
}

/**
 * The entry with all its text (answer, notes, quotes, document details) in `langCode`
 * when a full translation exists; otherwise the English entry unchanged.
 * References, names and URLs always stay as in the English entry.
 */
export function translateEntry(entry, langCode) {
  const t = TRANSLATIONS[langCode]?.[entry?.id]
  if (!t) return entry
  return {
    ...entry,
    q: t.q,
    a: t.a,
    say: t.s,
    bible: entry.bible.map(([ref, note], i) => [ref, t.b?.[i] ?? note]),
    fathers: entry.fathers.map(([who, src, text], i) => [who, src, t.f?.[i] ?? text]),
    docs: entry.docs.map(([title, detail, url], i) => [title, t.d?.[i] ?? detail, url]),
  }
}

// Bible book names for display ("John 6:53" → "Juan 6:53"). Lookups always use the English name.
const BOOK_NAMES = {
  ceb: {
    'Genesis': 'Genesis', 'Exodus': 'Exodo', 'Numbers': 'Numeros', 'Deuteronomy': 'Deuteronomio',
    '1 Samuel': '1 Samuel', '2 Samuel': '2 Samuel', '1 Kings': '1 Mga Hari', '2 Kings': '2 Mga Hari',
    '1 Chronicles': '1 Cronicas', 'Psalms': 'Mga Salmo', 'Psalm': 'Salmo', 'Proverbs': 'Mga Proverbio',
    'Isaiah': 'Isaias', 'Jeremiah': 'Jeremias', 'Ezekiel': 'Ezequiel', 'Jonah': 'Jonas', 'Malachi': 'Malaquias',
    'Wisdom': 'Kaalam', 'Sirach': 'Sirac', '2 Maccabees': '2 Macabeo',
    'Matthew': 'Mateo', 'Mark': 'Marcos', 'Luke': 'Lucas', 'John': 'Juan', 'Acts': 'Mga Buhat',
    'Romans': 'Mga Taga-Roma', '1 Corinthians': '1 Mga Taga-Corinto', '2 Corinthians': '2 Mga Taga-Corinto',
    'Galatians': 'Mga Taga-Galacia', 'Ephesians': 'Mga Taga-Efeso', 'Philippians': 'Mga Taga-Filipos',
    'Colossians': 'Mga Taga-Colosas', '1 Thessalonians': '1 Mga Taga-Tesalonica', '2 Thessalonians': '2 Mga Taga-Tesalonica',
    '1 Timothy': '1 Timoteo', '2 Timothy': '2 Timoteo', 'Titus': 'Tito', 'Hebrews': 'Mga Hebreohanon',
    'James': 'Santiago', '1 Peter': '1 Pedro', '2 Peter': '2 Pedro', '1 John': '1 Juan', 'Jude': 'Judas',
    'Revelation': 'Pinadayag',
  },
  fil: {
    'Genesis': 'Genesis', 'Exodus': 'Exodo', 'Numbers': 'Mga Bilang', 'Deuteronomy': 'Deuteronomio',
    '1 Samuel': '1 Samuel', '2 Samuel': '2 Samuel', '1 Kings': '1 Mga Hari', '2 Kings': '2 Mga Hari',
    '1 Chronicles': '1 Cronica', 'Psalms': 'Mga Awit', 'Psalm': 'Awit', 'Proverbs': 'Kawikaan',
    'Isaiah': 'Isaias', 'Jeremiah': 'Jeremias', 'Ezekiel': 'Ezekiel', 'Jonah': 'Jonas', 'Malachi': 'Malakias',
    'Wisdom': 'Karunungan', 'Sirach': 'Sirac', '2 Maccabees': '2 Macabeo',
    'Matthew': 'Mateo', 'Mark': 'Marcos', 'Luke': 'Lucas', 'John': 'Juan', 'Acts': 'Mga Gawa',
    'Romans': 'Roma', '1 Corinthians': '1 Corinto', '2 Corinthians': '2 Corinto',
    'Galatians': 'Galacia', 'Ephesians': 'Efeso', 'Philippians': 'Filipos',
    'Colossians': 'Colosas', '1 Thessalonians': '1 Tesalonica', '2 Thessalonians': '2 Tesalonica',
    '1 Timothy': '1 Timoteo', '2 Timothy': '2 Timoteo', 'Titus': 'Tito', 'Hebrews': 'Hebreo',
    'James': 'Santiago', '1 Peter': '1 Pedro', '2 Peter': '2 Pedro', '1 John': '1 Juan', 'Jude': 'Judas',
    'Revelation': 'Pahayag',
  },
}
const BOOK_RE = Object.fromEntries(Object.entries(BOOK_NAMES).map(([lang, map]) => [
  lang,
  new RegExp(`\\b(${Object.keys(map).sort((a, b) => b.length - a.length).join('|')})\\b`, 'g'),
]))

export const localizeRef = (ref, langCode) =>
  BOOK_RE[langCode] ? ref.replace(BOOK_RE[langCode], (m) => BOOK_NAMES[langCode][m]) : ref

// ── Search ──────────────────────────────────────────────────────────────────

const STOP = new Set(`a an the and or but if of to in on at by for with from as is are was were be been being am do does did
  not no it its this that these those there their they them he she his her him i me my we us our you your what which who whom
  why how when where can could would should will shall may might must just only also very so than then too about into out up
  someone somebody people person said says say told tell telling claim claims claimed believe believes think thinks really
  catholic catholics church respond answer question help please explain true false ba ang mga sa ng na og nga si ni kay ug
  ko mo ka kami kita ako siya sila ito iyan dili hindi wala walang use used using need get got go make made know like want
  one many much every all still even ever now way good bad thing things anything everything other another same`.split(/\s+/))

export function normalize(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/['’`]/g, '')
    .replace(/[^\p{L}\p{N}:]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const stem = (w) => {
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3)
  if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2)
  if (w.length > 4 && w.endsWith('es')) return w.slice(0, -2)
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1)
  return w
}

const tokens = (s) => normalize(s).split(' ').filter(w => w.length > 1 && !STOP.has(w)).map(stem)

// Pre-compute each entry's searchable phrases and token set, plus inverse document frequency.
const INDEX = ENTRIES.map(e => ({
  entry: e,
  phrases: e.kw.map(normalize).filter(p => p.length >= 2),
  toks: new Set([
    ...e.kw.flatMap(tokens), ...tokens(e.q), ...tokens(e.id.replace(/-/g, ' ')),
    // Translated challenges, so questions asked in those languages find the entry too.
    ...Object.values(TRANSLATIONS).flatMap(t => (t[e.id] ? tokens(t[e.id].q) : [])),
  ]),
}))

const DF = new Map()
for (const { toks } of INDEX) for (const t of toks) DF.set(t, (DF.get(t) || 0) + 1)
const idf = (t) => Math.log(1 + INDEX.length / (DF.get(t) || INDEX.length))

/** Score threshold above which a match may be confident enough to answer directly. */
export const STRONG_MATCH = 7

/**
 * Rank entries for a free-text question.
 * Returns [{ entry, score, confident }] sorted best-first (only entries with score > 0).
 * `confident` needs a keyword-phrase hit or at least two matching words, so a single
 * shared word never triggers a full answer.
 */
export function searchKB(query, limit = 8) {
  const nq = ` ${normalize(query)} `
  const qToks = [...new Set(tokens(query))]
  if (nq.trim().length === 0) return []

  const results = []
  for (const { entry, phrases, toks } of INDEX) {
    // Exact phrase hits (word-bounded). Longer phrases are stronger evidence.
    const hits = phrases
      .filter(p => nq.includes(` ${p} `))
      .map(p => 5 + 2.5 * p.split(' ').length)
      .sort((a, b) => b - a)
      .slice(0, 3)
    let score = hits.reduce((s, h) => s + h, 0)

    // Token overlap, weighted by rarity.
    let matched = 0
    for (const t of qToks) if (toks.has(t)) { score += 1.6 * idf(t); matched++ }

    const confident = score >= STRONG_MATCH && (hits.length > 0 || matched >= 2)
    if (score > 0) results.push({ entry, score, confident })
  }
  return results.sort((a, b) => b.score - a.score).slice(0, limit)
}

/** Related entries for an answer: its own `rel` list first, then other search hits. */
export function relatedFor(entry, searchResults = [], max = 4) {
  const ids = [...(entry.rel || []), ...searchResults.map(r => r.entry.id)]
  return [...new Set(ids)].filter(id => id !== entry.id && ENTRY_BY_ID[id]).slice(0, max)
}

// ── Links & plain-text export ───────────────────────────────────────────────

// Bible Gateway versions per language, and whether each includes the deuterocanonical books.
// The Cebuano "Ang Pulong sa Dios" does not, so those books fall back to the RSV Catholic Edition.
const BIBLE_VERSIONS = {
  ceb: { version: 'APSD-CEB', deuterocanon: false },
  fil: { version: 'MBBTAG-DC', deuterocanon: true },
}
const DEUTEROCANON = /\b(Tobit|Judith|Wisdom|Sirach|Baruch|Maccabees)\b/

export const bibleUrl = (ref, langCode = 'en') => {
  const v = BIBLE_VERSIONS[langCode]
  const version = v && (v.deuterocanon || !DEUTEROCANON.test(ref)) ? v.version : 'RSVCE'
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=${version}`
}

export const cccUrl = (n) => `https://www.catholicculture.org/culture/library/catechism/index.cfm?recnum=${n}`

/** Compact paragraph list, e.g. [253,254,255,266] → "253–255, 266". */
export function formatCcc(nums) {
  const out = []
  for (let i = 0; i < nums.length; i++) {
    let j = i
    while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) j++
    out.push(j > i ? `${nums[i]}–${nums[j]}` : `${nums[i]}`)
    i = j
  }
  return out.join(', ')
}

const TEXT_LABELS = {
  en:  ['Challenge', 'Answer', 'Scripture', 'Catechism', 'Early Church', 'Church documents', 'Respond'],
  ceb: ['Hagit', 'Tubag', 'Kasulatan', 'Katekismo', 'Unang Simbahan', 'Mga dokumento sa Simbahan', 'Unsaon pagtubag'],
  fil: ['Hamon', 'Sagot', 'Kasulatan', 'Katesismo', 'Sinaunang Simbahan', 'Mga dokumento ng Simbahan', 'Paano tumugon'],
}

/**
 * Plain-text version of an answer — used for Copy/Share and as AI context.
 * With a langCode that has a translation, the text and labels are in that language.
 */
export function entryToText(entry, langCode = 'en') {
  const lang = hasTranslation(entry, langCode) ? langCode : 'en'
  const e = translateEntry(entry, lang)
  const [ch, an, sc, cat, fa, dc, re] = TEXT_LABELS[lang] || TEXT_LABELS.en
  const parts = [`⚡ ${ch}: ${e.q}`, `✅ ${an}: ${e.a}`]
  if (e.bible.length) parts.push(`📖 ${sc}:\n` + e.bible.map(([r, n]) => `• ${localizeRef(r, lang)} — ${n}`).join('\n'))
  if (e.ccc.length) parts.push(`📘 ${cat}: CCC ${formatCcc(e.ccc)}`)
  if (e.fathers.length) parts.push(`📜 ${fa}:\n` + e.fathers.map(([w, s, t]) => `• ${w}, ${s}: ${t}`).join('\n'))
  if (e.docs.length) parts.push(`⛪ ${dc}:\n` + e.docs.map(([t, d]) => `• ${t}: ${d}`).join('\n'))
  parts.push(`💬 ${re}: ${e.say}`)
  return parts.join('\n\n')
}
