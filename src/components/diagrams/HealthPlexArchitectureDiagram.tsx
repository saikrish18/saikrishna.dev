import { useState } from 'react'

const modules = ['Admin', 'Auth', 'Physician', 'Nurse', 'Patient', 'Pharmacy', 'Laboratory', 'Landing']

export default function HealthPlexArchitectureDiagram() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
      role="group"
      aria-label="Ratna HealthPlex architecture: pnpm monorepo composing eight applications via Module Federation"
    >
      <div className="flex flex-col items-center">
        <div
          className={`rounded-lg border px-5 py-2.5 font-mono text-sm font-semibold transition-colors duration-200 ${
            hovered ? 'border-[var(--color-accent)] text-[var(--color-accent)]' : 'border-[var(--color-border)] text-[var(--color-ink)]'
          }`}
        >
          Host Application
        </div>
        <div className="h-6 w-px bg-[var(--color-border)]" aria-hidden="true" />

        <div className="relative w-full">
          <div className="absolute left-0 right-0 top-0 h-px bg-[var(--color-border)]" aria-hidden="true" />
          <div className="grid grid-cols-2 gap-3 pt-6 sm:grid-cols-4 sm:gap-3">
            {modules.map((mod) => {
              const isActive = hovered === mod
              return (
                <button
                  key={mod}
                  type="button"
                  className="relative flex flex-col items-center focus:outline-none"
                  onMouseEnter={() => setHovered(mod)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(mod)}
                  onBlur={() => setHovered(null)}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -top-6 h-6 w-px transition-colors duration-200 ${
                      isActive ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'
                    }`}
                  />
                  <span
                    className={`w-full rounded-lg border px-3 py-2.5 text-center text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'scale-105 border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                        : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-body)]'
                    }`}
                  >
                    {mod}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-[var(--color-muted)]">
        Hover or focus an application to see its connection to the host.
      </p>
    </div>
  )
}
