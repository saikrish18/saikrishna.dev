import { profile } from '../../data/profile'
import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-bold text-[var(--color-ink)]">{profile.name}</p>
          <p className="text-sm text-[var(--color-accent)]">{profile.title}</p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">React.js | TypeScript | Next.js | Micro Frontends</p>
          <p className="mt-2 text-xs font-medium text-[var(--color-accent)]">Open to International Opportunities</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[var(--color-muted)] sm:items-end">
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
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </Container>
    </footer>
  )
}
