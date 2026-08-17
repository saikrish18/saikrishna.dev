import { useProfile } from '../../hooks/useProfile'
import Container from '../ui/Container'
import Button from '../ui/Button'
import FrontendSystemDiagram from '../diagrams/FrontendSystemDiagram'

const HERO_TAGLINE = 'Building scalable React and TypeScript applications across healthcare, AI and enterprise platforms.'
const HERO_SUPPORTING =
  '5+ years of experience in frontend engineering, microfrontend architecture, AI-enabled applications and production-grade web platforms.'

export default function Hero() {
  const { data: profile } = useProfile()

  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {profile?.profileImageUrl && (
              <img
                src={profile.profileImageUrl}
                alt={profile.name}
                className="mb-6 h-24 w-24 rounded-full border-2 border-[var(--color-border)] object-cover sm:h-28 sm:w-28"
              />
            )}
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {profile?.title}
            </p>
            <h1 className="text-[clamp(2.25rem,1.6rem+3vw,3.75rem)] font-extrabold tracking-tight text-[var(--color-ink)]">
              {profile?.name}
            </h1>
            <p className="mt-5 max-w-xl text-[clamp(1.05rem,1rem+0.3vw,1.25rem)] font-medium leading-relaxed text-[var(--color-ink)]">
              {HERO_TAGLINE}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">{HERO_SUPPORTING}</p>
            <p className="mt-3 text-sm font-medium text-[var(--color-accent)]">Open to international relocation</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button href={profile?.resumeUrl ?? '/Sai-Krishna-Resume.pdf'} variant="secondary" download>
                Download Resume
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me →
              </Button>
            </div>

            {profile && (
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)]">
                {profile.linkedinUrl && (
                  <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
                    LinkedIn
                  </a>
                )}
                <span className="text-[var(--color-border)]">/</span>
                <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-accent)]">
                  {profile.email}
                </a>
                {profile.githubUrl && (
                  <>
                    <span className="text-[var(--color-border)]">/</span>
                    <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
                      GitHub
                    </a>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="hidden lg:block">
            <FrontendSystemDiagram />
          </div>
        </div>
      </Container>
    </section>
  )
}
