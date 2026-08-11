import { useState } from 'react'
import { navLinks, profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'
import Container from '../ui/Container'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((link) => link.href.replace('#', '')))

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight text-[var(--color-ink)]"
            aria-label={`${profile.name} — home`}
          >
            SK<span className="text-[var(--color-accent)]">.</span>dev
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              download
              className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-ink)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-body)] hover:bg-[var(--color-surface)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 rounded-lg bg-[var(--color-accent)] px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Download CV
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
