import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-white hover:opacity-90 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]',
  secondary:
    'border border-[var(--color-border)] text-[var(--color-ink)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost: 'text-[var(--color-body)] hover:text-[var(--color-accent)]',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export default function Button({ variant = 'primary', children, className = '', href, ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
