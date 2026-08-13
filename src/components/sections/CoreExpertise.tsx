import { coreExpertise } from '../../data/profile'
import Section from '../ui/Section'
import Badge from '../ui/Badge'

export default function CoreExpertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Core Expertise"
      title="What I bring to a frontend team"
      description="5+ years of hands-on React and TypeScript engineering, focused on architecture, reliability, and shipping to production."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {coreExpertise.map((card) => (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/60 hover:shadow-lg"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-transform duration-300 group-hover:scale-x-100"
            />
            <h3 className="text-base font-semibold text-[var(--color-ink)]">{card.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
