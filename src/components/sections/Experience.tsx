import { experience } from '../../data/profile'
import Section from '../ui/Section'
import Accordion from '../ui/Accordion'

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

            {entry.projects && entry.projects.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {entry.projects.map((project) => (
                  <span
                    key={project}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-mono text-[11px] font-medium text-[var(--color-body)]"
                  >
                    {project}
                  </span>
                ))}
              </div>
            )}

            {entry.details && entry.details.length > 0 && (
              <div className="mt-3 max-w-2xl">
                <Accordion trigger="Show details">
                  <ul className="space-y-1.5">
                    {entry.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-sm leading-relaxed text-[var(--color-body)]">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
