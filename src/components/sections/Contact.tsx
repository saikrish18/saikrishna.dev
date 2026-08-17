import { contact } from '../../data/profile'
import { useProfile } from '../../hooks/useProfile'
import Section from '../ui/Section'
import Button from '../ui/Button'
import CopyEmailButton from '../ui/CopyEmailButton'

export default function Contact() {
  const { data: profile } = useProfile()

  return (
    <Section id="contact">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-14 text-center sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">{contact.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">{contact.text}</p>

        {profile && (
          <>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${profile.email}`} variant="primary">
                Email Me
              </Button>
              {profile.linkedinUrl && (
                <Button href={profile.linkedinUrl} variant="secondary" target="_blank" rel="noreferrer">
                  LinkedIn
                </Button>
              )}
              <Button href={profile.resumeUrl ?? '/Sai-Krishna-Resume.pdf'} variant="ghost" download>
                Download Resume
              </Button>
            </div>

            <div className="mt-5">
              <CopyEmailButton email={profile.email} />
            </div>
          </>
        )}
      </div>
    </Section>
  )
}
