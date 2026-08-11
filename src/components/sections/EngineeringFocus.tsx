import { engineeringFocus } from '../../data/profile'
import Section from '../ui/Section'

export default function EngineeringFocus() {
  return (
    <Section
      id="engineering"
      eyebrow="Engineering Focus"
      title="How I approach frontend engineering"
      className="bg-[var(--color-surface)]/40"
    >
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {engineeringFocus.map((item, index) => (
          <div key={item.title} className="flex gap-4">
            <span className="font-mono text-sm font-semibold text-[var(--color-accent)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-base font-semibold text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
