import { useQuery } from '@tanstack/react-query'
import { fetchTechnologies } from '../../api/technologiesApi'
import type { Technology } from '../../api/types'
import Section from '../ui/Section'
import Badge from '../ui/Badge'

// Presentation-only grouping order — the backend doesn't dictate category display order,
// so this is where that curatorial choice lives. Any category not listed here (e.g. a
// brand-new one added from the admin) still renders, just appended after these.
const CATEGORY_ORDER = ['Frontend', 'Architecture', 'State & Data', 'Forms & Testing', 'UI', 'Backend & API', 'AI', 'Tools']

function groupByCategory(technologies: Technology[]) {
  const byCategory = new Map<string, Technology[]>()
  for (const tech of technologies) {
    const list = byCategory.get(tech.category) ?? []
    list.push(tech)
    byCategory.set(tech.category, list)
  }

  const orderedCategories = [
    ...CATEGORY_ORDER.filter((category) => byCategory.has(category)),
    ...[...byCategory.keys()].filter((category) => !CATEGORY_ORDER.includes(category)),
  ]

  return orderedCategories.map((category) => ({ category, items: byCategory.get(category)! }))
}

export default function TechStack() {
  const { data: technologies, isLoading, isError } = useQuery({
    queryKey: ['technologies'],
    queryFn: fetchTechnologies,
  })

  return (
    <Section id="stack" eyebrow="Technology" title="Tools & Technologies">
      {isLoading && (
        <div className="flex min-h-[160px] items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" />
        </div>
      )}

      {isError && <p className="text-sm text-[var(--color-muted)]">Unable to load technologies right now.</p>}

      {technologies && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groupByCategory(technologies).map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-[var(--color-ink)]">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Badge key={tech.id}>{tech.name}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
