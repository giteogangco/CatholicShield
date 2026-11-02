import { useState } from 'react'
import { useChat } from './hooks/useChat'
import LanguageScreen from './components/LanguageScreen'
import HomeScreen from './components/HomeScreen'
import ChatScreen from './components/ChatScreen'
import LibraryScreen from './components/LibraryScreen'
import { loadCachedTranslations } from './data/aiTranslations'
import './App.css'

export default function App() {
  const [screen, setScreen] = useState('lang')   // 'lang' | 'home' | 'library' | 'chat'
  const [lang,   setLang]   = useState(null)
  const [libraryCat, setLibraryCat] = useState('all')

  const { messages, loading, sendMessage, openEntry, clearMessages, aiAvailable } = useChat(lang)

  /* ── Handlers ────────────────────────────────────────── */

  const handleSelectLang = (selectedLang) => {
    setLang(selectedLang)
    loadCachedTranslations(selectedLang.code)
    clearMessages()
    setScreen('home')
  }

  const handleBrowse = (catId) => {
    setLibraryCat(catId)
    setScreen('library')
  }

  const handleOpenFromLibrary = (id) => {
    clearMessages()
    setScreen('chat')
    openEntry(id)
  }

  const handleAsk = (text) => {
    clearMessages()
    setScreen('chat')
    sendMessage(text)
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
          onBrowse={handleBrowse}
          onStartTopic={handleAsk}
          onAskOwn={handleAsk}
        />
      )}

      {screen === 'library' && lang && (
        <LibraryScreen
          key={libraryCat}
          lang={lang}
          initialCat={libraryCat}
          onOpen={handleOpenFromLibrary}
          onHome={() => setScreen('home')}
          onSelectLang={() => setScreen('lang')}
        />
      )}

      {screen === 'chat' && lang && (
        <ChatScreen
          lang={lang}
          messages={messages}
          loading={loading}
          aiAvailable={aiAvailable}
          onSend={sendMessage}
          onAskAI={(text) => sendMessage(text, { forceAI: true })}
          onReadVerse={sendMessage}
          onOpenEntry={openEntry}
          onClear={clearMessages}
          onLibrary={() => handleBrowse('all')}
          onHome={() => setScreen('home')}
          onSelectLang={() => setScreen('lang')}
        />
      )}
    </div>
  )
}
