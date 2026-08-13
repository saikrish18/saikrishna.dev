import Tabs from '../ui/Tabs'

export default function TabsCompositionDemo() {
  return (
    <Tabs
      tabs={[
        {
          id: 'overview',
          label: 'Overview',
          content: (
            <p className="text-sm leading-relaxed text-[var(--color-body)]">
              This tab strip is a single reusable <code className="font-mono text-xs">Tabs</code> component, composed from a
              tablist and independent tabpanels — no copy-pasted markup per usage.
            </p>
          ),
        },
        {
          id: 'keyboard',
          label: 'Keyboard',
          content: (
            <p className="text-sm leading-relaxed text-[var(--color-body)]">
              Try it: focus a tab and use <kbd className="rounded border border-[var(--color-border)] px-1">←</kbd>{' '}
              <kbd className="rounded border border-[var(--color-border)] px-1">→</kbd> to move between tabs, and{' '}
              <kbd className="rounded border border-[var(--color-border)] px-1">Home</kbd> /{' '}
              <kbd className="rounded border border-[var(--color-border)] px-1">End</kbd> to jump to the first or last.
            </p>
          ),
        },
        {
          id: 'aria',
          label: 'Accessibility',
          content: (
            <p className="text-sm leading-relaxed text-[var(--color-body)]">
              Built on <code className="font-mono text-xs">role=&quot;tablist&quot;</code>,{' '}
              <code className="font-mono text-xs">aria-selected</code>, and roving <code className="font-mono text-xs">tabIndex</code>{' '}
              so screen readers announce the active tab correctly.
            </p>
          ),
        },
      ]}
    />
  )
}
