import { useState } from 'react'

interface CopyEmailButtonProps {
  email: string
  className?: string
}

export default function CopyEmailButton({ email, className = '' }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — silently no-op rather than showing a false confirmation.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="9" y="9" width="12" height="12" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </svg>
      {copied ? 'Email copied' : 'Copy Email'}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>
  )
}
