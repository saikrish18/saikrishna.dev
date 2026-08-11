import { experience } from '../../data/profile'
import Section from '../ui/Section'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <ol className="relative space-y-10 border-l border-[var(--color-border)] pl-8">
        {experience.map((entry) => (
          <li key={entry.company} className="relative">
            <span
              className={`absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] ${
                entry.current ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-muted)]'
              }`}
            />
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
              {entry.period}
            </p>
            <h3 className="mt-1 text-lg font-bold text-[var(--color-ink)]">{entry.company}</h3>
            <p className="text-sm font-medium text-[var(--color-accent)]">{entry.title}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-body)]">{entry.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
