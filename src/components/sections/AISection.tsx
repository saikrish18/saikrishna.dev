import { aiSection } from '../../data/profile'
import Section from '../ui/Section'
import Card from '../ui/Card'

export default function AISection() {
  return (
    <Section id="ai" eyebrow="AI-Enabled Frontend Engineering" title="Shipping AI-powered product features">
      <p className="max-w-2xl text-base leading-relaxed text-[var(--color-body)]">{aiSection.intro}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {aiSection.items.map((item) => (
          <Card key={item.name}>
            <h3 className="font-mono text-lg font-bold text-[var(--color-accent)]">{item.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
