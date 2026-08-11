import type { ReactNode } from 'react'
import Container from './Container'

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">{title}</h2>
            )}
            {description && <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
