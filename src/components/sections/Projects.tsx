import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProjects } from '../../api/projectsApi'
import type { Project } from '../../api/types'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Modal from '../ui/Modal'
import HealthPlexArchitectureDiagram from '../diagrams/HealthPlexArchitectureDiagram'
import TestAIWorkflowDiagram from '../diagrams/TestAIWorkflowDiagram'
import DrBasuTenantDiagram from '../diagrams/DrBasuTenantDiagram'

const FILTERS = ['All', 'Healthcare', 'AI', 'Enterprise', 'Mobile']

function CaseStudyDiagram({ diagramKey }: { diagramKey: string | null }) {
  if (diagramKey === 'healthplex') return <HealthPlexArchitectureDiagram />
  if (diagramKey === 'testai') return <TestAIWorkflowDiagram />
  if (diagramKey === 'drbasu') return <DrBasuTenantDiagram />
  return null
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const previewToken = useMemo(() => new URLSearchParams(window.location.search).get('previewToken'), [])

  const { data: projects, isLoading, isError } = useQuery({
    queryKey: ['projects', previewToken],
    queryFn: () => fetchProjects(previewToken),
  })

  const visibleFeatured = useMemo(
    () => (projects ?? []).filter((p) => p.featured && (filter === 'All' || p.categories.includes(filter))),
    [projects, filter],
  )
  const visibleOther = useMemo(
    () => (projects ?? []).filter((p) => !p.featured && (filter === 'All' || p.categories.includes(filter))),
    [projects, filter],
  )

  const openCaseStudy = (project: Project) => {
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
      {previewToken && (
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
          Draft preview mode — you&apos;re seeing an unpublished project that visitors can&apos;t see yet.
        </p>
      )}

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

      {isLoading && (
        <div className="flex min-h-[240px] items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" />
        </div>
      )}

      {isError && <p className="text-sm text-[var(--color-muted)]">Unable to load projects right now.</p>}

      {!isLoading && !isError && visibleFeatured.length === 0 && visibleOther.length === 0 && (
        <p className="text-sm text-[var(--color-muted)]">No projects match this filter yet.</p>
      )}

      {visibleFeatured.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-3">
          {visibleFeatured.map((project) => (
            <Card key={project.id} className="flex flex-col" onClick={() => openCaseStudy(project)}>
              {project.images.length > 0 && (
                <img
                  src={project.images[0].url}
                  alt={project.images[0].altText ?? project.title}
                  className="-mx-6 -mt-6 mb-2 aspect-video w-[calc(100%+3rem)] rounded-t-xl object-cover"
                />
              )}
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  {project.projectType}
                </p>
                <div className="flex flex-shrink-0 gap-2">
                  {project.status !== 'PUBLISHED' && (
                    <span className="rounded-full border border-amber-400 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-600">
                      Draft
                    </span>
                  )}
                  {project.isPrivate && (
                    <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                      Private
                    </span>
                  )}
                </div>
              </div>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-ink)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>

              <ul className="mt-4 space-y-2">
                {project.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight.id} className="flex gap-2 text-sm leading-relaxed text-[var(--color-body)]">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {highlight.text}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-4 @sm:gap-2.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech.id}>{tech.name}</Badge>
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
                key={project.id}
                className="rounded-lg border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                    {project.projectType}
                  </p>
                  {project.status !== 'PUBLISHED' && (
                    <span className="flex-shrink-0 rounded-full border border-amber-400 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-600">
                      Draft
                    </span>
                  )}
                </div>
                <h4 className="mt-1.5 text-base font-semibold text-[var(--color-ink)]">{project.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{project.shortDescription}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech.id}>{tech.name}</Badge>
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
          title={selectedProject.title}
          eyebrow={selectedProject.projectType ?? undefined}
        >
          {selectedProject.isPrivate && (
            <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              Private / Restricted Project
            </p>
          )}
          <div className="space-y-6">
            {selectedProject.images.length > 0 && (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {selectedProject.images.map((image) => (
                  <a key={image.id} href={image.url} target="_blank" rel="noreferrer">
                    <img
                      src={image.url}
                      alt={image.altText ?? selectedProject.title}
                      className="aspect-video w-full rounded-lg border border-[var(--color-border)] object-cover transition-opacity hover:opacity-90"
                    />
                  </a>
                ))}
              </div>
            )}
            {selectedProject.caseStudy && (
              <>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Context</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                    {selectedProject.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Architecture</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                    {selectedProject.caseStudy.architectureNote}
                  </p>
                  <div className="mt-4">
                    <CaseStudyDiagram diagramKey={selectedProject.caseStudy.diagramKey} />
                  </div>
                </div>
              </>
            )}

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">My Role & Contribution</h3>
              <ul className="mt-2 space-y-2">
                {selectedProject.highlights.map((highlight) => (
                  <li key={highlight.id} className="flex gap-2 text-sm leading-relaxed text-[var(--color-body)]">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {highlight.text}
                  </li>
                ))}
              </ul>
            </div>

            {selectedProject.caseStudy && selectedProject.caseStudy.keyAreas.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Key Engineering Areas</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.caseStudy.keyAreas.map((area) => (
                    <Badge key={area}>{area}</Badge>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">Technology</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech.id}>{tech.name}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  )
}
