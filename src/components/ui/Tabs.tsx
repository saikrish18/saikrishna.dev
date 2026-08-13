import { useId, useRef, useState, type ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: TabItem[]
  defaultTabId?: string
}

export default function Tabs({ tabs, defaultTabId }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const baseId = useId()

  const activeIndex = tabs.findIndex((tab) => tab.id === activeId)

  const focusTabAt = (index: number) => {
    const tab = tabs[(index + tabs.length) % tabs.length]
    setActiveId(tab.id)
    tabRefs.current[tab.id]?.focus()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusTabAt(activeIndex + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusTabAt(activeIndex - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusTabAt(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusTabAt(tabs.length - 1)
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="Tabs" className="flex flex-wrap gap-2" onKeyDown={handleKeyDown}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeId
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el
              }}
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-[var(--color-muted)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== activeId}
          className="mt-4"
        >
          {tab.id === activeId && tab.content}
        </div>
      ))}
    </div>
  )
}
