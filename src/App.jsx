import { useState } from 'react'
import { useChat } from './hooks/useChat'
import LanguageScreen from './components/LanguageScreen'
import HomeScreen from './components/HomeScreen'
import ChatScreen from './components/ChatScreen'
import './App.css'

export default function App() {
  const [screen, setScreen] = useState('lang')   // 'lang' | 'home' | 'chat'
  const [lang,   setLang]   = useState(null)

  const { messages, loading, sendMessage, clearMessages } = useChat(lang)

  /* ── Handlers ────────────────────────────────────────── */

  const handleSelectLang = (selectedLang) => {
    setLang(selectedLang)
    clearMessages()
    setScreen('home')
  }

  const handleStartCategory = (cat) => {
    clearMessages()
    setScreen('chat')
    sendMessage(
      `I need help defending the Catholic faith on the topic of: ${cat.label}. ` +
      `What are the most common attacks I might face, and how do I respond?`
    )
  }

  const handleStartTopic = (topic) => {
    clearMessages()
    setScreen('chat')
    sendMessage(`Someone told me: "${topic}" — how do I respond as a Catholic?`)
  }

  const handleAskOwn = (text) => {
    clearMessages()
    setScreen('chat')
    sendMessage(text)
  }

  const handleChatSend = (text) => {
    if (text === (lang && 'Start fresh')) {
      clearMessages()
    } else {
      sendMessage(text)
    }
  }

  /* ── Render ──────────────────────────────────────────── */

  return (
    <div className="app-shell">
      {screen === 'lang' && (
        <LanguageScreen onSelect={handleSelectLang} />
      )}

      {screen === 'home' && lang && (
        <HomeScreen
          lang={lang}
          onSelectLang={() => setScreen('lang')}
          onStartCategory={handleStartCategory}
          onStartTopic={handleStartTopic}
          onAskOwn={handleAskOwn}
        />
      )}

      {screen === 'chat' && lang && (
        <ChatScreen
          lang={lang}
          messages={messages}
          loading={loading}
          onSend={handleChatSend}
          onHome={() => setScreen('home')}
          onSelectLang={() => setScreen('lang')}
        />
      )}
    </div>
  )
}
