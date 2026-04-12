# ✝️ Catholic Shield — Faith Defense App

A multilingual Catholic apologetics app that helps ordinary Catholics defend their faith using Scripture, Sacred Tradition, and the Magisterium.

**Supports 8 Philippine languages** (Filipino, Cebuano, Ilocano, Ilonggo, Waray-Waray, Bikol, Kapampangan, Tausug) plus 10 international languages.

---

## 📸 Features

- 🌍 **Multilingual** — Full responses in your chosen language
- 📖 **Scripture-based** — Every answer backed by Bible verses
- 📜 **Tradition & History** — Early Church Fathers, Councils, Saints
- ⚡ **Quick Attacks** — Tap common challenges to get instant responses
- 💬 **Chat freely** — Type anything someone said to you
- 🇵🇭 **Philippine languages first** — Built for Filipino Catholics

---

## 🚀 Quick Start (Local Development)

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/catholic-shield.git
cd catholic-shield
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your API key

Create a `.env` file in the root folder:
```
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

> ⚠️ **Important:** Get your API key from [console.anthropic.com](https://console.anthropic.com).
> Never commit your `.env` file. It is already in `.gitignore`.

### 4. Run locally
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ☁️ Deploy to Vercel (Free — Recommended)

### Option A: Deploy via Vercel website (easiest)

1. Push your code to GitHub (see below)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"**
4. Import your `catholic-shield` repository
5. Under **"Environment Variables"**, add:
   - Key: `VITE_ANTHROPIC_API_KEY`
   - Value: your Anthropic API key
6. Click **"Deploy"**

Done! Your app will be live at `https://catholic-shield.vercel.app` (or similar).

### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## ☁️ Deploy to Netlify (Free — Alternative)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click **"Add new site" → "Import an existing project"**
4. Connect GitHub and select your repo
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Under **"Environment variables"**, add:
   - Key: `VITE_ANTHROPIC_API_KEY`
   - Value: your Anthropic API key
7. Click **"Deploy site"**

---

## 📤 Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit — Catholic Shield app"

# Create a new repo on github.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/catholic-shield.git
git branch -M main
git push -u origin main
```

---

## 📁 Project Structure

```
catholic-shield/
├── public/
│   └── cross.svg               # Favicon
├── src/
│   ├── components/
│   │   ├── ChatScreen.jsx      # Chat/conversation screen
│   │   ├── HomeScreen.jsx      # Main home screen
│   │   ├── LangPill.jsx        # Language switcher button
│   │   ├── LanguageScreen.jsx  # Language selection screen
│   │   └── MessageBubble.jsx   # Individual chat message
│   ├── data/
│   │   ├── languages.js        # All supported languages
│   │   ├── topics.js           # Categories & quick topics
│   │   └── uiStrings.js        # Localized UI text
│   ├── hooks/
│   │   └── useChat.js          # AI chat logic + API calls
│   ├── App.css                 # App layout styles
│   ├── App.jsx                 # Root component / screen router
│   ├── index.css               # Global styles & shared classes
│   └── main.jsx                # React entry point
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🔑 API Key Setup Notes

This app calls the Anthropic Claude API directly from the browser. For a **personal or community app**, this is fine. For a **public app**, consider:

1. **Setting usage limits** in your Anthropic console
2. **Adding a backend proxy** (e.g. a Vercel API route) so your key is never exposed
3. Monitoring your usage at [console.anthropic.com](https://console.anthropic.com)

---

## ✝️ Built with

- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [Claude API](https://www.anthropic.com) (claude-sonnet-4)
- [Google Fonts](https://fonts.google.com) — Cinzel + Crimson Pro

---

*"Always be ready to give an explanation to anyone who asks you for a reason for your hope." — 1 Peter 3:15*
