import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-accent)]/50 ${className}`}
    >
      {children}
    </div>
  )
}
