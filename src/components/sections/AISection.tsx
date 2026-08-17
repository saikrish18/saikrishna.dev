import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { fetchAiExperience } from '../../api/aiExperienceApi'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const AI_SECTION_INTRO =
  "AI is a growing part of the products I build — from automated software testing to AI-assisted medical image review. My role is frontend integration and product implementation of AI-powered functionality, not model training."

export default function AISection() {
  const reducedMotion = usePrefersReducedMotion()
  const { data: items, isLoading, isError } = useQuery({
    queryKey: ['ai-experience'],
    queryFn: fetchAiExperience,
  })

  return (
    <Section id="ai" eyebrow="AI-Enabled Frontend Engineering" title="Shipping AI-powered product features">
      <p className="max-w-2xl text-base leading-relaxed text-[var(--color-body)]">{AI_SECTION_INTRO}</p>

      {isLoading && (
        <div className="mt-8 flex min-h-[160px] items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" />
        </div>
      )}
      {isError && <p className="mt-8 text-sm text-[var(--color-muted)]">Unable to load AI experience right now.</p>}

      {items && (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item.id}>
              <h3 className="font-mono text-lg font-bold text-[var(--color-accent)]">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">{item.description}</p>

              <div className="mt-5 flex flex-col gap-2 border-t border-[var(--color-border)] pt-4">
                {item.workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="flex items-start gap-3"
                    initial={reducedMotion ? false : { opacity: 0, x: -6 }}
                    whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)] font-mono text-[10px] font-semibold text-[var(--color-accent)]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-ink)]">{step.label}</p>
                      <p className="text-xs text-[var(--color-muted)]">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </Section>
  )
}
