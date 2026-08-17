import { useQuery } from '@tanstack/react-query'
import { fetchSkills } from '../../api/skillsApi'
import type { Skill } from '../../api/types'
import Section from '../ui/Section'
import Badge from '../ui/Badge'

// Presentation-only grouping order, same rationale as TechStack's CATEGORY_ORDER.
const CATEGORY_ORDER = [
  'Frontend Engineering',
  'Frontend Architecture',
  'State & Data',
  'Testing',
  'AI Integration',
  'Enterprise Applications',
]

function groupByCategory(skills: Skill[]) {
  const byCategory = new Map<string, Skill[]>()
  for (const skill of skills) {
    const list = byCategory.get(skill.category) ?? []
    list.push(skill)
    byCategory.set(skill.category, list)
  }

  const orderedCategories = [
    ...CATEGORY_ORDER.filter((category) => byCategory.has(category)),
    ...[...byCategory.keys()].filter((category) => !CATEGORY_ORDER.includes(category)),
  ]

  return orderedCategories.map((category) => ({ category, items: byCategory.get(category)! }))
}

export default function CoreExpertise() {
  const { data: skills, isLoading, isError } = useQuery({ queryKey: ['skills'], queryFn: fetchSkills })

  return (
    <Section
      id="expertise"
      eyebrow="Core Expertise"
      title="What I bring to a frontend team"
      description="5+ years of hands-on React and TypeScript engineering, focused on architecture, reliability, and shipping to production."
    >
      {isLoading && (
        <div className="flex min-h-[160px] items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" />
        </div>
      )}
      {isError && <p className="text-sm text-[var(--color-muted)]">Unable to load expertise right now.</p>}

      {skills && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groupByCategory(skills).map((card) => (
            <div
              key={card.category}
              className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60 hover:shadow-lg"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-transform duration-300 group-hover:scale-x-100"
              />
              <h3 className="text-base font-semibold text-[var(--color-ink)]">{card.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.items.map((skill) => (
                  <Badge key={skill.id}>{skill.name}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
