import { stats } from '../../data/profile'
import Container from '../ui/Container'

export default function Stats() {
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
