# ✝️ Catholic Shield — Faith Defense App

A multilingual Catholic apologetics app that helps ordinary Catholics defend their faith using Scripture, Sacred Tradition, and the Magisterium.

**🆓 100% FREE to run** — powered by Google Gemini's free API (no credit card needed).  
**🇵🇭 Supports 8 Philippine languages** plus 10 international languages.

---

## ✨ Features

- 🌍 **Multilingual** — Full responses in your chosen language
- 📖 **Scripture-based** — Every answer backed by Bible verses
- 📜 **Tradition & History** — Early Church Fathers, Councils, Saints
- ⚡ **Quick Attacks** — Tap common challenges for instant responses
- 💬 **Free chat** — Type anything someone said to you
- 🇵🇭 **Philippine languages first** — Built for Filipino Catholics

---

## 🔑 Step 1 — Get Your FREE Gemini API Key

1. Go to **[aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key — that's it! ✅

> **Free limits:** 15 requests/minute · 1,500 requests/day · No credit card ever needed.

---

## 💻 Step 2 — Run Locally

```bash
# 1. Clone your repo
git clone https://github.com/YOUR_USERNAME/catholic-shield.git
cd catholic-shield

# 2. Install dependencies
npm install

# 3. Create your .env file
cp .env.example .env
# Open .env and paste your Gemini key

# 4. Start the app
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser. 🎉

---

## ☁️ Step 3 — Deploy FREE on Vercel

### Via Vercel website (easiest — no command line needed)

1. Push your code to GitHub (see below)
2. Go to **[vercel.com](https://vercel.com)** → Sign in with GitHub
3. Click **"Add New Project"** → Import your `catholic-shield` repo
4. Under **"Environment Variables"**, add:
   | Name | Value |
   |------|-------|
   | `GEMINI_API_KEY` | your Gemini key |
5. Click **"Deploy"** 🚀

Your app will be live at `https://catholic-shield.vercel.app` (or similar) — **free forever**.

### Via Vercel CLI
```bash
npm install -g vercel
vercel
# Follow the prompts, add GEMINI_API_KEY when asked
```

---

## ☁️ Deploy FREE on Netlify (Alternative)

1. Go to **[netlify.com](https://netlify.com)** → Sign in
2. **"Add new site"** → **"Import an existing project"** → Connect GitHub
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **"Environment variables"** → Add `GEMINI_API_KEY`
5. **"Deploy site"** 🚀

---

## 📤 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Catholic Shield"

# Create a new repo on github.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/catholic-shield.git
git branch -M main
git push -u origin main
```

---

## 📁 Project Structure

```
catholic-shield/
├── api/
│   └── chat.js                  ← Vercel serverless proxy (keeps API key secret)
├── public/
│   └── cross.svg                ← Favicon
├── src/
│   ├── components/
│   │   ├── ChatScreen.jsx       ← Chat/conversation screen
│   │   ├── HomeScreen.jsx       ← Main home screen
│   │   ├── LangPill.jsx         ← Language switcher button
│   │   ├── LanguageScreen.jsx   ← Language selection screen
│   │   └── MessageBubble.jsx    ← Individual chat message
│   ├── data/
│   │   ├── languages.js         ← All 18 languages
│   │   ├── topics.js            ← Categories & quick topics
│   │   └── uiStrings.js         ← Localized UI text
│   ├── hooks/
│   │   └── useChat.js           ← Gemini API chat logic
│   ├── App.css / App.jsx        ← Root + screen routing
│   ├── index.css                ← Global styles
│   └── main.jsx                 ← React entry point
├── .env.example                 ← Copy this to .env
├── .gitignore                   ← Excludes .env, node_modules, dist
├── index.html
├── package.json
├── vercel.json                  ← Vercel config
└── vite.config.js               ← Dev proxy config
```

---

## 🆓 Why It's Free

| Service | Free Tier |
|---------|-----------|
| **Google Gemini API** | 1,500 requests/day, no credit card |
| **Vercel Hosting** | Free for personal projects |
| **GitHub** | Free for public repos |

**Total monthly cost: $0** ✅

---

## 🔒 Security Notes

- Your API key is **never** exposed to the browser
- In local dev: Vite proxy injects the key server-side
- In production: Vercel serverless function keeps key in environment variables
- `.env` is in `.gitignore` so it's never committed to GitHub

---

## ✝️ Built with

- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [Google Gemini API](https://aistudio.google.com) (gemini-1.5-flash — free)
- [Vercel](https://vercel.com) (free hosting)
- [Google Fonts](https://fonts.google.com) — Cinzel + Crimson Pro

---

*"Always be ready to give an explanation to anyone who asks you for a reason for your hope." — 1 Peter 3:15*
