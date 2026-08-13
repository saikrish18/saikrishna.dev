import { useEffect, useId, useRef, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { useScrollLock } from '../../hooks/useScrollLock'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  eyebrow?: string
  children: ReactNode
}

export default function Modal({ open, onClose, title, eyebrow, children }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const reducedMotion = usePrefersReducedMotion()

  useFocusTrap(open, containerRef)
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  const transition = reducedMotion ? { duration: 0 } : { duration: 0.2, ease: 'easeOut' as const }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-2xl sm:p-8"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
            transition={transition}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {eyebrow && (
              <p className="mb-2 pr-10 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                {eyebrow}
              </p>
            )}
            <h2 id={titleId} className="pr-10 text-2xl font-bold text-[var(--color-ink)]">
              {title}
            </h2>

            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
