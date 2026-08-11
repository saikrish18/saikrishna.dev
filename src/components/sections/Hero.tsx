import { hero, profile } from '../../data/profile'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {profile.title}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[var(--color-ink)]">
              {hero.tagline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">{hero.supporting}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button href={profile.resumeUrl} variant="secondary" download>
                Download CV
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me →
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)]">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
                LinkedIn
              </a>
              <span className="text-[var(--color-border)]">/</span>
              <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-accent)]">
                {profile.email}
              </a>
              {profile.github && (
                <>
                  <span className="text-[var(--color-border)]">/</span>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
                    GitHub
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-[var(--color-body)]">
                <span className="text-[var(--color-muted)]">$ whoami</span>{'\n'}
                Senior Frontend Engineer{'\n\n'}
                <span className="text-[var(--color-muted)]">$ core --stack</span>{'\n'}
                React.js · TypeScript · Next.js{'\n'}
                Micro Frontends · Module Federation{'\n\n'}
                <span className="text-[var(--color-muted)]">$ experience --years</span>{'\n'}
                5+{'\n\n'}
                <span className="text-[var(--color-muted)]">$ domains</span>{'\n'}
                Healthcare · AI-Enabled · Enterprise SaaS
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
