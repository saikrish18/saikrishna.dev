const sharedModules = [
  'Front Office',
  'Doctor Consultation',
  'Lead Management CRM',
  'Pharmacy',
  'Admin',
  'Reports',
  'Notifications',
  'Download Center',
]

export default function DrBasuTenantDiagram() {
  return (
    <div
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
      role="group"
      aria-label="Dr. Basu Eyecare onboarded as a tenant on the shared HealthPlex platform"
    >
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
        <div className="rounded-lg border border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-3 text-center">
          <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">Dr. Basu Eyecare</p>
          <p className="text-[11px] text-[var(--color-muted)]">New Tenant</p>
        </div>

        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="rotate-90 flex-shrink-0 text-[var(--color-muted)] sm:rotate-0"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>

        <div className="w-full max-w-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
          <p className="mb-3 text-center font-mono text-xs font-semibold text-[var(--color-ink)]">
            Shared HealthPlex Platform
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {sharedModules.map((mod) => (
              <span
                key={mod}
                className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 text-[11px] text-[var(--color-body)]"
              >
                {mod}
              </span>
            ))}
            <span className="rounded-md border border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 text-[11px] font-medium text-[var(--color-accent)]">
              MedGemma Eye-Image Review
            </span>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-[var(--color-muted)]">
        Data is isolated per tenant; the underlying modules and AI capability are shared.
      </p>
    </div>
  )
}
