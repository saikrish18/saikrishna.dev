import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useProfile } from '../../hooks/useProfile'
import ThemeToggle from './ThemeToggle'
import Container from '../ui/Container'

const SECTION_IDS = navLinks.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const reducedMotion = usePrefersReducedMotion()
  const { data: profile } = useProfile()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight text-[var(--color-ink)]"
            aria-label={profile ? `${profile.name} — home` : 'Home'}
          >
            SK<span className="text-[var(--color-accent)]">.</span>dev
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
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

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href={profile?.resumeUrl ?? '/Sai-Krishna-Resume.pdf'}
              download
              className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
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

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden"
            initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
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
                href={profile?.resumeUrl ?? '/Sai-Krishna-Resume.pdf'}
                download
                className="mt-2 rounded-lg bg-[var(--color-accent)] px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Download Resume
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
