import Tooltip from '../ui/Tooltip'

const stages = [
  { label: 'Requirement', description: 'A test requirement or user flow is defined.' },
  { label: 'AI Test Generation', description: 'Gemini generates candidate test cases from the requirement.' },
  { label: 'Test Execution', description: 'Tests run across browsers and devices via distributed agent nodes.' },
  { label: 'Defect Detection', description: 'Failures and regressions are identified from execution results.' },
  { label: 'Defect Tracking', description: 'Issues are logged and routed to the relevant team.' },
  { label: 'Release / CI-CD', description: 'Results feed into CI/CD-integrated release workflows.' },
]

export default function TestAIWorkflowDiagram() {
  return (
    <div
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
      role="group"
      aria-label="Ratna Test AI automated testing workflow"
    >
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-0">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex flex-1 items-center gap-2 sm:flex-col sm:gap-2">
            <Tooltip label={stage.description}>
              <span className="flex-1 cursor-help rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-center text-xs font-semibold text-[var(--color-body)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus:border-[var(--color-accent)] focus:text-[var(--color-accent)] sm:w-full">
                {stage.label}
              </span>
            </Tooltip>
            {index < stages.length - 1 && (
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="flex-shrink-0 rotate-90 text-[var(--color-muted)] sm:rotate-0"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-[var(--color-muted)]">
        Hover or focus a stage for a short explanation.
      </p>
    </div>
  )
}
