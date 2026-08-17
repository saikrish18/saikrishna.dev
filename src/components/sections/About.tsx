import { engineeringPrinciples } from '../../data/profile'
import { useProfile } from '../../hooks/useProfile'
import { splitParagraphs } from '../../lib/textUtils'
import Section from '../ui/Section'

export default function About() {
  const { data: profile } = useProfile()
  const paragraphs = splitParagraphs(profile?.longBio ?? null)

  return (
    <Section id="about" eyebrow="About" title="Frontend engineering, applied to real products">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-[var(--color-body)] sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Engineering Principles
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            {engineeringPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors duration-200 hover:border-[var(--color-accent)]/50"
              >
                <dt className="text-sm font-semibold text-[var(--color-ink)]">{principle.title}</dt>
                <dd className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">{principle.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
