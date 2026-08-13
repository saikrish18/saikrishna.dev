import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reducedMotion = usePrefersReducedMotion()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-[var(--color-border)] text-[var(--color-body)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.6 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.6 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  )
}
