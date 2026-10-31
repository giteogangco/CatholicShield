// Renders a single chat message: user text, library answer card, AI answer, or plain text.
import AnswerCard from './AnswerCard'
import { formatAIResponse } from './formatText'
import { getEntry, translateEntry } from '../data/knowledgeBase'

export default function MessageBubble({ message, ui, langCode, aiAvailable, onReadVerse, onOpenEntry, onAskAI }) {
  const { role, kind, content } = message

  if (role === 'user') {
    return (
      <div className="msg-bubble user">
        <div className="user-bubble">{content}</div>
      </div>
    )
  }

  if (kind === 'kb') {
    return (
      <div className="msg-bubble assistant">
        <AnswerCard
          message={message}
          ui={ui}
          langCode={langCode}
          aiAvailable={aiAvailable}
          onReadVerse={onReadVerse}
          onOpenEntry={onOpenEntry}
          onAskAI={onAskAI}
        />
      </div>
    )
  }

  const links = kind === 'ai' ? message.related : message.suggestions

  return (
    <div className="msg-bubble assistant">
      <div className="ai-bubble">
        {kind === 'ai' && <p className="ai-note">🤖 {ui.aiNote}</p>}
        <div dangerouslySetInnerHTML={{ __html: formatAIResponse(content) }} />
        {links?.length > 0 && (
          <div className="related">
            <p className="related-title">{ui.related}</p>
            {links.map(id => {
              const e = getEntry(id)
              return e && (
                <button key={id} className="related-btn" onClick={() => onOpenEntry(id)}>{translateEntry(e, langCode).q}</button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
