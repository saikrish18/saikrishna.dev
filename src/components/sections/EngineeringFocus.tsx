import { engineeringDomains, type EngineeringDomain } from '../../data/profile'
import Container from '../ui/Container'
import Badge from '../ui/Badge'
import { useInView } from '../../hooks/useInView'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const GRID_SPAN = [
  'sm:col-span-2 lg:col-span-2',
  'sm:col-span-1 lg:col-span-1',
  'sm:col-span-1 lg:col-span-1',
  'sm:col-span-2 lg:col-span-2',
  'sm:col-span-2 lg:col-span-1',
  'sm:col-span-2 lg:col-span-2',
]

function EngineeringHub() {
  return (
    <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl p-[1.5px]">
      <span
        aria-hidden="true"
        className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,var(--color-accent),var(--color-accent-2),var(--color-accent))] opacity-60 [animation:hub-spin_8s_linear_infinite]"
      />
      <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface)] px-8 py-7 text-center">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:14px_14px]"
        />
        <p className="relative font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
          Core Stack
        </p>
        <p className="relative mt-2 text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-[1.75rem]">
          React + TypeScript
        </p>
        <p className="relative mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
          The foundation every domain below is built on.
        </p>
      </div>
    </div>
  )
}

function MicroFrontendsVisual() {
  const mfes = ['MFE 1', 'MFE 2', 'MFE 3']
  return (
    <div aria-hidden="true" className="mx-auto mt-5 w-[172px]">
      <div className="flex justify-center">
        <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-1 font-mono text-[9px] font-semibold text-[var(--color-body)]">
          Shell
        </span>
      </div>
      <div className="mx-auto h-3 w-px bg-[var(--color-border)]" />
      <div className="h-px w-full bg-[var(--color-border)]" />
      <div className="flex justify-between">
        {mfes.map((mfe) => (
          <div key={mfe} className="flex flex-col items-center">
            <span className="h-3 w-px bg-[var(--color-border)]" />
            <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-1.5 py-1 font-mono text-[8px] text-[var(--color-muted)]">
              {mfe}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
        Module Federation
      </p>
    </div>
  )
}

function AiIntegrationVisual() {
  const steps = ['Frontend', 'AI Interface', 'Gemini / MedGemma', 'Application Workflow']
  return (
    <div aria-hidden="true" className="mt-5 space-y-0.5">
      {steps.map((step, i) => (
        <div key={step}>
          <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1.5 text-center font-mono text-[9px] font-medium text-[var(--color-body)]">
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="flex justify-center py-0.5 text-[10px] leading-none text-[var(--color-muted)]">↓</div>
          )}
        </div>
      ))}
    </div>
  )
}

function TestingPipelineVisual() {
  const steps = ['Code', 'Tests', 'Validation', 'CI/CD', 'Production']
  return (
    <div aria-hidden="true" className="mt-5 flex flex-wrap items-center gap-1.5">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-1.5">
          <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-1 font-mono text-[9px] font-medium text-[var(--color-body)]">
            {step}
          </span>
          {i < steps.length - 1 && <span className="text-[10px] text-[var(--color-muted)]">→</span>}
        </span>
      ))}
    </div>
  )
}

function DomainCard({ domain }: { domain: EngineeringDomain }) {
  return (
    <div className="group/card relative flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-lg sm:p-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-t-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-transform duration-300 group-hover/card:scale-x-100"
      />

      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">{domain.number}</span>
        {domain.metaNote && (
          <span className="text-right font-mono text-[10px] leading-tight text-[var(--color-muted)] transition-colors duration-200 group-hover/card:text-[var(--color-accent)]">
            {domain.metaNote}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-base font-semibold text-[var(--color-ink)] sm:text-lg">{domain.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{domain.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {domain.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {domain.visual === 'microFrontends' && <MicroFrontendsVisual />}
      {domain.visual === 'ai' && <AiIntegrationVisual />}
      {domain.visual === 'testing' && <TestingPipelineVisual />}
    </div>
  )
}

export default function EngineeringFocus() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0, rootMargin: '0px' })
  const reducedMotion = usePrefersReducedMotion()
  const revealed = reducedMotion || inView

  return (
    <section id="engineering" className="scroll-mt-24 bg-[var(--color-surface)]/40 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            <span className="text-[var(--color-muted)]">02</span>
            Engineering Focus
          </p>
          <h2 className="text-[clamp(1.9rem,1.5rem+1.6vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--color-ink)]">
            Building scalable frontend systems, not just interfaces.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            From microfrontend architecture and reusable component systems to AI-enabled products and
            production-grade React applications.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 transition-all duration-700 ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <EngineeringHub />

          <div aria-hidden="true" className="mx-auto hidden h-8 w-px bg-[var(--color-border)] lg:block" />
          <div aria-hidden="true" className="mx-auto hidden h-px max-w-4xl bg-[var(--color-border)] lg:block" />

          <p className="sr-only">Six engineering domains build on this React and TypeScript foundation:</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {engineeringDomains.map((domain, index) => (
              <div key={domain.id} className={`group/branch relative lg:pt-4 ${GRID_SPAN[index]}`}>
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 hidden h-4 w-px -translate-x-1/2 bg-[var(--color-border)] transition-colors duration-200 group-hover/branch:bg-[var(--color-accent)] lg:block"
                />
                <DomainCard domain={domain} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
