interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[clamp(1.75rem,1.4rem+1.2vw,2.25rem)] font-bold tracking-tight text-[var(--color-ink)]">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">{description}</p>}
    </div>
  )
}
