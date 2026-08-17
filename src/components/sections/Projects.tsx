import { useMemo, useState } from 'react'
import { featuredProjects, otherProjects, type FeaturedProject, type ProjectCategory } from '../../data/profile'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Modal from '../ui/Modal'
import HealthPlexArchitectureDiagram from '../diagrams/HealthPlexArchitectureDiagram'
import TestAIWorkflowDiagram from '../diagrams/TestAIWorkflowDiagram'
import DrBasuTenantDiagram from '../diagrams/DrBasuTenantDiagram'

const FILTERS: Array<ProjectCategory | 'All'> = ['All', 'Healthcare', 'AI', 'Enterprise', 'Mobile']

function CaseStudyDiagram({ kind }: { kind: FeaturedProject['caseStudy']['diagram'] }) {
  if (kind === 'healthplex') return <HealthPlexArchitectureDiagram />
  if (kind === 'testai') return <TestAIWorkflowDiagram />
  return <DrBasuTenantDiagram />
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const visibleFeatured = useMemo(
    () => featuredProjects.filter((project) => filter === 'All' || project.categories.includes(filter)),
    [filter],
  )
  const visibleOther = useMemo(
    () => otherProjects.filter((project) => filter === 'All' || project.categories.includes(filter)),
    [filter],
  )

  const openCaseStudy = (project: FeaturedProject) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Featured Projects"
      description="Production applications I've built and owned end-to-end on the frontend, across healthcare, AI-enabled, and enterprise platforms."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
              filter === option
                ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                : 'border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {visibleFeatured.length === 0 && visibleOther.length === 0 && (
        <p className="text-sm text-[var(--color-muted)]">No projects match this filter yet.</p>
      )}

      {visibleFeatured.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-3">
          {visibleFeatured.map((project) => (
            <Card key={project.name} className="flex flex-col" onClick={() => openCaseStudy(project)}>
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  {project.type}
                </p>
                {project.isPrivate && (
                  <span className="flex-shrink-0 rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    Private
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-ink)]">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>

              <ul className="mt-4 space-y-2">
                {project.contribution.slice(0, 2).map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-[var(--color-body)]">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-4 @sm:gap-2.5">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    openCaseStudy(project)
                  }}
                  className="text-sm font-semibold text-[var(--color-accent)] hover:underline"
                >
                  View Case Study →
                </button>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                  >
                    View Live ↗
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      {visibleOther.length > 0 && (
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-[var(--color-ink)]">Other Projects</h3>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Additional applications delivered across my earlier roles.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleOther.map((project) => (
              <div
                key={project.name}
                className="rounded-lg border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  {project.type}
                </p>
                <h4 className="mt-1.5 text-base font-semibold text-[var(--color-ink)]">{project.name}</h4>
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
      )}

      {selectedProject && (
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedProject.name}
          eyebrow={selectedProject.type}
        >
          {selectedProject.isPrivate && (
            <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              Private / Restricted Project
            </p>
          )}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Context</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">{selectedProject.caseStudy.challenge}</p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Architecture</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                {selectedProject.caseStudy.architectureNote}
              </p>
              <div className="mt-4">
                <CaseStudyDiagram kind={selectedProject.caseStudy.diagram} />
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">My Role & Contribution</h3>
              <ul className="mt-2 space-y-2">
                {selectedProject.contribution.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-[var(--color-body)]">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Key Engineering Areas</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedProject.caseStudy.keyAreas.map((area) => (
                  <Badge key={area}>{area}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Technology</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  )
}
