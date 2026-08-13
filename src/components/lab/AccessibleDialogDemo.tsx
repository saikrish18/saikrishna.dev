import { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

export default function AccessibleDialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">
        Try it with a keyboard: open the dialog, press <kbd className="rounded border border-[var(--color-border)] px-1">Tab</kbd> to
        see focus stay trapped inside, and <kbd className="rounded border border-[var(--color-border)] px-1">Esc</kbd> to close.
      </p>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open Accessible Dialog
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} title="Accessible Dialog" eyebrow="Demo">
        <p className="text-sm leading-relaxed text-[var(--color-body)]">
          This dialog traps focus, closes on <kbd className="rounded border border-[var(--color-border)] px-1">Esc</kbd>, locks
          background scroll, and returns focus to the button that opened it when closed — the same primitive used for every
          project case study on this site.
        </p>
        <div className="mt-6 flex justify-end">
          <Button variant="primary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}
