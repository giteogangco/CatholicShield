# ✝ Catholic Shield

A faith-defense guide that helps Catholics answer common questions and objections about the Catholic faith with charity and with sources. It works offline from a built-in library, and can optionally use AI for questions the library doesn't cover.

## What it does

- **82 researched answers** across 12 categories: Bible, Tradition, Mary & the Saints, the Pope, Sacraments, Salvation, Purgatory, God & the Trinity, Morality, Church History, Devotions, and other groups' claims (Iglesia ni Cristo, Jehovah's Witnesses, Sabbatarians…).
- **Every answer cites its sources:**
  - 📖 **Scripture.** Tap a verse to read it in the app, or ↗ to open it on Bible Gateway (RSV-CE).
  - 📘 **Catechism** paragraph numbers, linked to the full text.
  - 📜 **Church Fathers** with work and date. Verbatim quotes appear in quotation marks; paraphrases are marked "Summary".
  - ⛪ **Church documents** (councils, encyclicals), linked to vatican.va where available.
  - 💬 **How to respond**: a short, charitable line to use in a real conversation.
- **Library** to browse by category or search all answers.
- **Smart search** that understands phrasing in English, Filipino, Cebuano and Spanish. It only answers directly when it is confident. Otherwise it suggests the closest topics.
- **Copy / Share** an answer with its references (for Messenger, etc.).
- **Multilingual**: 20 interface languages. 22 core answers are translated into Filipino, Cebuano, Spanish and more, with the full English references one tap away.
- **Optional AI mode (Claude or Gemini)** for anything not in the library. Answers are grounded in the closest library entries and must cite Scripture, the Catechism and the Fathers.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173. The library and Bible lookup work immediately. AI mode needs the Vercel function, so use `npx vercel dev` to test it locally.

## AI mode (optional)

AI mode answers questions the library doesn't cover. It uses **Claude** if `ANTHROPIC_API_KEY` is set. Otherwise it uses **Gemini** if `GEMINI_API_KEY` is set. With no key, the app runs from the library alone and the AI buttons hide themselves.

Set the variables in Vercel → Project → Settings → Environment Variables, then redeploy:

| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Your Claude API key (https://platform.claude.com/settings/keys). Paid per use. |
| `CLAUDE_MODEL` | Optional. Default `claude-opus-5-5`. Set `claude-sonnet-5-5` or `claude-haiku-5-5` for lower cost. |
| `GEMINI_API_KEY` | Free-tier alternative (https://aistudio.google.com/app/apikey). Used only when no Claude key is set. |
| `GEMINI_MODEL` | Optional. Default `gemini-2.5-flash`. |

Library answers never call the AI, so they cost nothing.

## Adding or editing answers

Answers live in `src/data/kb/*.js`, one file per area. Each entry looks like this:

```js
{
  id: 'real-presence',            // unique slug
  cat: 'sacraments',              // category id from src/data/topics.js
  q: 'The challenge, as people say it',
  kw: ['search phrases', 'any language'],
  a: `The answer. Blank lines separate paragraphs.`,
  bible: [['John 6:51-58', 'what it shows']],
  ccc: [1374, 1376],
  fathers: [['St. Ignatius of Antioch', 'Letter to the Smyrnaeans 7 (c. 107 AD)', 'Summary: …']],
  docs: [['Council of Trent, Session XIII (1551)', 'detail', 'optional url']],
  say: '"A gentle line for the conversation."',
  rel: ['mass-sacrifice'],        // related entry ids
  legacy: 'real presence',        // optional: links to a translated answer in offlineAnswers.js
}
```

Search keywords should be phrases people actually type. Add Filipino and Cebuano phrasings too.

## Project layout

```
api/chat.js                 Vercel function: optional grounded AI answers (Claude or Gemini)
src/data/kb/                The answer library
src/data/knowledgeBase.js   Search engine, links, plain-text export
src/data/offlineAnswers.js  Translated answers + Bible verse lookup (bible-api.com)
src/hooks/useChat.js        Verse lookup → library → AI → suggestions
src/components/             Screens: Language, Home, Library, Chat, AnswerCard
```

> The loose files in the repository root (e.g. `App.jsx`, `topics.js`, `download`) are old copies and are not used by the build.

## Deploy

Push to the GitHub repo connected to Vercel (`catholic-shield.vercel.app`). Vercel builds with `vite build` automatically.

---

*"Always be prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and reverence."* — 1 Peter 3:15
