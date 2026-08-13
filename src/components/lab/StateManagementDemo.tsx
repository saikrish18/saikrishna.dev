import { useRef, useState } from 'react'
import Button from '../ui/Button'

type Status = 'idle' | 'running' | 'pass' | 'fail'

interface TestCase {
  id: string
  name: string
  status: Status
}

const initialCases: TestCase[] = [
  { id: 'login', name: 'User can log in', status: 'idle' },
  { id: 'search', name: 'Search returns results', status: 'idle' },
  { id: 'checkout', name: 'Checkout completes', status: 'idle' },
  { id: 'a11y', name: 'Dialog is keyboard accessible', status: 'idle' },
]

const STATUS_STYLES: Record<Status, string> = {
  idle: 'border-[var(--color-border)] text-[var(--color-muted)]',
  running: 'border-[var(--color-accent)] text-[var(--color-accent)]',
  pass: 'border-emerald-500/60 text-emerald-500',
  fail: 'border-red-500/60 text-red-500',
}

export default function StateManagementDemo() {
  const [cases, setCases] = useState<TestCase[]>(initialCases)
  const [running, setRunning] = useState(false)
  const cancelled = useRef(false)

  const passCount = cases.filter((c) => c.status === 'pass').length
  const failCount = cases.filter((c) => c.status === 'fail').length

  const runTests = async () => {
    cancelled.current = false
    setRunning(true)
    setCases((prev) => prev.map((c) => ({ ...c, status: 'idle' })))

    for (const testCase of initialCases) {
      if (cancelled.current) break
      setCases((prev) => prev.map((c) => (c.id === testCase.id ? { ...c, status: 'running' } : c)))
      await new Promise((resolve) => setTimeout(resolve, 450))
      if (cancelled.current) break
      const result: Status = testCase.id === 'checkout' ? 'fail' : 'pass'
      setCases((prev) => prev.map((c) => (c.id === testCase.id ? { ...c, status: result } : c)))
    }

    setRunning(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <Button variant="secondary" onClick={runTests} disabled={running}>
          {running ? 'Running…' : 'Run Tests'}
        </Button>
        <p className="font-mono text-xs text-[var(--color-muted)]">
          {passCount} passed · {failCount} failed
        </p>
      </div>

      <ul className="mt-4 space-y-2">
        {cases.map((testCase) => (
          <li
            key={testCase.id}
            className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2"
          >
            <span className="text-sm text-[var(--color-body)]">{testCase.name}</span>
            <span
              className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${STATUS_STYLES[testCase.status]}`}
            >
              {testCase.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
