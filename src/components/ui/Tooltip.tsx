import { useId, useState, type ReactNode } from 'react'

interface TooltipProps {
  label: string
  children: ReactNode
}

export default function Tooltip({ label, children }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const id = useId()

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={visible ? id : undefined}>{children}</span>
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[220px] -translate-x-1/2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-2 text-center text-xs leading-snug text-[var(--color-body)] shadow-lg transition-opacity duration-150 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </span>
    </span>
  )
}
