import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface Layer {
  label: string
  caption: string
  href: string
}

const layers: Layer[] = [
  { label: 'User Interface', caption: 'What the user sees and interacts with', href: '#projects' },
  { label: 'React + TypeScript', caption: 'Component logic and type safety', href: '#expertise' },
  { label: 'State / Data Layer', caption: 'Redux Toolkit, React Query, Context API', href: '#expertise' },
  { label: 'API Layer', caption: 'REST & GraphQL integration', href: '#engineering' },
  { label: 'Micro Frontends', caption: 'Independently deployable, Module Federation', href: '#engineering' },
  { label: 'Production', caption: 'Owned end-to-end through release', href: '#experience' },
]

export default function FrontendSystemDiagram() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-[var(--color-muted)]">frontend_system.tsx</span>
      </div>

      <ol className="relative" aria-label="Frontend system architecture layers — each links to the relevant section">
        {layers.map((layer, index) => {
          const isActive = activeIndex === index
          const isLast = index === layers.length - 1
          return (
            <motion.li
              key={layer.label}
              className="relative pb-6 pl-8 last:pb-0"
              initial={reducedMotion ? false : { opacity: 0, x: -8 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={`absolute left-[5px] top-3 h-full w-px transition-colors duration-200 ${
                    isActive ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'
                  }`}
                />
              )}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 transition-all duration-200 ${
                  isActive
                    ? 'scale-125 border-[var(--color-accent)] bg-[var(--color-accent)]'
                    : 'border-[var(--color-muted)] bg-[var(--color-bg)]'
                }`}
              />
              <a
                href={layer.href}
                className="-m-1 block rounded-md p-1"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
              >
                <p
                  className={`font-mono text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink)]'
                  }`}
                >
                  {layer.label}
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-muted)]">{layer.caption}</p>
              </a>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}
