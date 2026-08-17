import { techStack } from '../../data/profile'
import Section from '../ui/Section'
import Badge from '../ui/Badge'

export default function TechStack() {
  return (
    <Section id="stack" eyebrow="Technology" title="Tools & Technologies">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-[var(--color-ink)]">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
