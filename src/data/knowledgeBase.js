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

const legacyByKey = new Map(LEGACY_KB.map(e => [e.keywords[0], e]))

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
  toks: new Set([...e.kw.flatMap(tokens), ...tokens(e.q), ...tokens(e.id.replace(/-/g, ' '))]),
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

export const bibleUrl = (ref) =>
  `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=RSVCE`

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

/** Plain-text version of an answer — used for Copy/Share and as AI context. */
export function entryToText(e) {
  const parts = [`⚡ Challenge: ${e.q}`, `✅ Answer: ${e.a}`]
  if (e.bible.length) parts.push('📖 Scripture:\n' + e.bible.map(([r, n]) => `• ${r} — ${n}`).join('\n'))
  if (e.ccc.length) parts.push(`📘 Catechism: CCC ${formatCcc(e.ccc)}`)
  if (e.fathers.length) parts.push('📜 Early Church:\n' + e.fathers.map(([w, s, t]) => `• ${w}, ${s}: ${t}`).join('\n'))
  if (e.docs.length) parts.push('⛪ Church documents:\n' + e.docs.map(([t, d]) => `• ${t}: ${d}`).join('\n'))
  parts.push(`💬 Respond: ${e.say}`)
  return parts.join('\n\n')
}
