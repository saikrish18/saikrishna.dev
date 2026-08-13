import type { ReactNode } from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'

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
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <SectionHeading eyebrow={eyebrow} title={title ?? ''} description={description} className="mb-12" />
        )}
        {children}
      </Container>
    </section>
  )
}
