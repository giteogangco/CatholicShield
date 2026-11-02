/**
 * aiTranslations.js — on-demand AI translations for languages without a built-in one.
 *
 * An answer is fetched from /api/translate the first time it is opened in such a
 * language, then kept in this browser (localStorage) so it never costs anything again
 * on this device. The server response is also cached at Vercel's edge for everyone.
 */
import { BUILT_IN_LANGS, getEntry, hasTranslation, registerTranslation } from './knowledgeBase'

const PREFIX = 'cs-tr-v1:'
const inflight = new Map()
let unavailable = false   // set once the endpoint says translation is off (no key / no server)

export const needsAITranslation = (langCode) => !BUILT_IN_LANGS.has(langCode) && !unavailable

/** Load this device's saved translations for a language into the library. */
export function loadCachedTranslations(langCode) {
  if (BUILT_IN_LANGS.has(langCode)) return
  try {
    const prefix = `${PREFIX}${langCode}:`
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith(prefix)) registerTranslation(langCode, key.slice(prefix.length), JSON.parse(localStorage.getItem(key)))
    }
  } catch { /* storage unavailable — translations will just be fetched again */ }
}

/** Ensure an entry is translated into langCode. Resolves true when a translation is available. */
export function ensureTranslation(langCode, id) {
  if (hasTranslation(getEntry(id), langCode)) return Promise.resolve(true)
  if (!needsAITranslation(langCode)) return Promise.resolve(false)
  const key = `${langCode}:${id}`
  if (inflight.has(key)) return inflight.get(key)

  const p = (async () => {
    try {
      const res = await fetch(`/api/translate?id=${encodeURIComponent(id)}&lang=${encodeURIComponent(langCode)}`)
      if (res.status === 404 || res.status === 503) { unavailable = true; return false }
      if (!res.ok) return false
      const { t } = await res.json()
      if (!registerTranslation(langCode, id, t)) return false
      try { localStorage.setItem(PREFIX + key, JSON.stringify(t)) } catch { /* storage full or blocked */ }
      return true
    } catch {
      return false
    } finally {
      inflight.delete(key)
    }
  })()
  inflight.set(key, p)
  return p
}
