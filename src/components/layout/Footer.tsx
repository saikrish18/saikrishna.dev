import { profile } from '../../data/profile'
import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-accent)]">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
            LinkedIn
          </a>
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
              GitHub
            </a>
          )}
        </div>
      </Container>
    </footer>
  )
}
