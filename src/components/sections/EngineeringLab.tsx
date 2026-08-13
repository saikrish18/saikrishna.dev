import type { ComponentType } from 'react'
import { engineeringLab } from '../../data/profile'
import Section from '../ui/Section'
import Card from '../ui/Card'
import ResponsiveLayoutDemo from '../lab/ResponsiveLayoutDemo'
import AccessibleDialogDemo from '../lab/AccessibleDialogDemo'
import StateManagementDemo from '../lab/StateManagementDemo'
import TabsCompositionDemo from '../lab/TabsCompositionDemo'

const DEMO_COMPONENTS: Record<string, ComponentType> = {
  'responsive-layout': ResponsiveLayoutDemo,
  'accessible-dialog': AccessibleDialogDemo,
  'state-management': StateManagementDemo,
  'component-composition': TabsCompositionDemo,
}

export default function EngineeringLab() {
  return (
    <Section
      id="lab"
      eyebrow="Frontend Engineering Lab"
      title="See the engineering, not just read about it"
      description="Small, working demonstrations of the same patterns used throughout this site — not toy exercises."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {engineeringLab.map((demo) => {
          const DemoComponent = DEMO_COMPONENTS[demo.id]
          return (
            <Card key={demo.id}>
              <h3 className="text-base font-semibold text-[var(--color-ink)]">{demo.title}</h3>
              <div className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                {DemoComponent && <DemoComponent />}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">
                <span className="font-semibold text-[var(--color-body)]">What this demonstrates: </span>
                {demo.demonstrates}
              </p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
