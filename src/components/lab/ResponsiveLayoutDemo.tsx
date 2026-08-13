import { useState } from 'react'

const items = ['Header', 'Sidebar', 'Content', 'Footer', 'Aside', 'Actions']

export default function ResponsiveLayoutDemo() {
  const [width, setWidth] = useState(100)

  return (
    <div>
      <label htmlFor="lab-width" className="mb-3 flex items-center justify-between text-xs text-[var(--color-muted)]">
        <span>Container width</span>
        <span className="font-mono">{width}%</span>
      </label>
      <input
        id="lab-width"
        type="range"
        min={30}
        max={100}
        value={width}
        onChange={(event) => setWidth(Number(event.target.value))}
        className="w-full accent-[var(--color-accent)]"
        aria-label="Adjust preview container width"
      />

      <div
        className="mx-auto mt-4 rounded-lg border border-dashed border-[var(--color-border)] p-3 transition-[width] duration-150"
        style={{ width: `${width}%` }}
      >
        <div className="grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(70px,1fr))]">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-3 text-center text-[clamp(10px,0.6rem+0.2vw,12px)] font-medium text-[var(--color-body)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
