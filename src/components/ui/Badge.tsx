export default function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--color-body)]">
      {children}
    </span>
  )
}
