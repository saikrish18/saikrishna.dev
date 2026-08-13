import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`@container rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-accent)]/50 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
