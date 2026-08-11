import { coreExpertise } from '../../data/profile'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function CoreExpertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Core Expertise"
      title="What I bring to a frontend team"
      description="Six years of hands-on React and TypeScript engineering, focused on architecture, reliability, and shipping to production."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {coreExpertise.map((card) => (
          <Card key={card.title}>
            <h3 className="text-base font-semibold text-[var(--color-ink)]">{card.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
