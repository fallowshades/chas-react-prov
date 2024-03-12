import { useState } from 'react'
export default function Panel({ title, collapsible, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div>
      <h1>{title}</h1>

      {isCollapsed && children}
      {collapsible && (
        <button type='button' onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? 'visa mindre' : 'visa mer'}
        </button>
      )}
    </div>
  )
}
