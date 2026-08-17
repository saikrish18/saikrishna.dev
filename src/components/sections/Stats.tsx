import { useProfile } from '../../hooks/useProfile'
import Container from '../ui/Container'

const STATIC_STATS = [
  { value: 'React + TypeScript', label: 'Core Expertise' },
  { value: 'Micro Frontends', label: 'Module Federation' },
  { value: 'AI', label: 'Gemini + MedGemma' },
]

export default function Stats() {
  const { data: profile } = useProfile()

  const stats = [
    { value: profile?.yearsOfExperience ?? '', label: 'Frontend Engineering' },
    ...STATIC_STATS,
  ]

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/50 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-xl font-bold text-[var(--color-ink)] sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
