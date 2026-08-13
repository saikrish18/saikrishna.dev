import { useId, useState, type ReactNode } from 'react'

interface AccordionProps {
  trigger: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

export default function Accordion({ trigger, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-2 text-left text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-ink)]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
        {trigger}
      </button>
      <div
        id={panelId}
        className={`grid overflow-hidden transition-all duration-200 ${open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  )
}
