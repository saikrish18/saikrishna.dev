import { featuredProjects, otherProjects } from '../../data/profile'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Featured Projects"
      description="Production applications I've built and owned end-to-end on the frontend, across healthcare, AI-enabled, and enterprise platforms."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">
              {project.type}
            </p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-xl font-bold text-[var(--color-ink)]">{project.name}</h3>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap text-xs font-semibold text-[var(--color-accent)] hover:underline"
                >
                  View Live ↗
                </a>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2 text-sm leading-relaxed text-[var(--color-body)]">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-4">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-lg font-semibold text-[var(--color-ink)]">Other Projects</h3>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          Additional applications delivered across my earlier roles.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                {project.type}
              </p>
              <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h4 className="text-base font-semibold text-[var(--color-ink)]">{project.name}</h4>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap text-xs font-semibold text-[var(--color-accent)] hover:underline"
                  >
                    View Live ↗
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{project.oneLiner}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
