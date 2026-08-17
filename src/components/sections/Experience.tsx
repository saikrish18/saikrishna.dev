import { useQuery } from '@tanstack/react-query'
import { fetchExperience } from '../../api/experienceApi'
import { formatPeriod } from '../../lib/dateUtils'
import { parseSummaryAndDetails } from '../../lib/textUtils'
import Section from '../ui/Section'
import Accordion from '../ui/Accordion'

export default function Experience() {
  const { data: experience, isLoading, isError } = useQuery({
    queryKey: ['experience'],
    queryFn: fetchExperience,
  })

  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      {isLoading && (
        <div className="flex min-h-[160px] items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" />
        </div>
      )}
      {isError && <p className="text-sm text-[var(--color-muted)]">Unable to load experience right now.</p>}

      {experience && (
        <ol className="relative space-y-10 border-l border-[var(--color-border)] pl-8">
          {experience.map((entry) => {
            const { summary, details } = parseSummaryAndDetails(entry.description)
            return (
              <li key={entry.id} className="relative">
                <span
                  className={`absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] ${
                    entry.current ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-muted)]'
                  }`}
                />
                <p className="font-mono text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
                  {formatPeriod(entry.startDate, entry.endDate, entry.current)}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[var(--color-ink)]">{entry.company}</h3>
                <p className="text-sm font-medium text-[var(--color-accent)]">{entry.jobTitle}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-body)]">{summary}</p>

                {entry.projects.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {entry.projects.map((project) => (
                      <span
                        key={project.id}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-mono text-[11px] font-medium text-[var(--color-body)]"
                      >
                        {project.title}
                      </span>
                    ))}
                  </div>
                )}

                {details.length > 0 && (
                  <div className="mt-3 max-w-2xl">
                    <Accordion trigger="Show details">
                      <ul className="space-y-1.5">
                        {details.map((detail) => (
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
            )
          })}
        </ol>
      )}
    </Section>
  )
}
