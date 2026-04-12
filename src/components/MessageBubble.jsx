// Formats and renders a single chat message bubble

function formatAIResponse(text) {
  let r = text
  // Wrap lines starting with emoji markers in styled divs
  r = r.replace(/(⚡[^\n]+)/g,  '<div class="sec sch">$1</div>')
  r = r.replace(/(✅[^\n]+(?:\n(?![⚡✅📖📜💬]).+)*)/g, '<div class="sec san">$1</div>')
  r = r.replace(/(📖[^\n]+(?:\n(?![⚡✅📖📜💬]).+)*)/g, '<div class="sec ssc">$1</div>')
  r = r.replace(/(📜[^\n]+(?:\n(?![⚡✅📖📜💬]).+)*)/g, '<div class="sec str">$1</div>')
  r = r.replace(/(💬[^\n]+(?:\n(?![⚡✅📖📜💬]).+)*)/g, '<div class="sec sre">$1</div>')
  r = r.replace(/\n/g, '<br/>')
  return r
}

export default function MessageBubble({ message }) {
  const { role, content } = message

  if (role === 'user') {
    return (
      <div className="msg-bubble user">
        <div className="user-bubble">{content}</div>
      </div>
    )
  }

  return (
    <div className="msg-bubble assistant">
      <div
        className="ai-bubble"
        dangerouslySetInnerHTML={{ __html: formatAIResponse(content) }}
      />
    </div>
  )
}
