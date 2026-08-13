import { contact, profile } from '../../data/profile'
import Section from '../ui/Section'
import Button from '../ui/Button'
import CopyEmailButton from '../ui/CopyEmailButton'

export default function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-14 text-center sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">{contact.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">{contact.text}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${profile.email}`} variant="primary">
            Email Me
          </Button>
          <Button href={profile.linkedin} variant="secondary" target="_blank" rel="noreferrer">
            LinkedIn
          </Button>
          <Button href={profile.resumeUrl} variant="ghost" download>
            Download Resume
          </Button>
        </div>

        <div className="mt-5">
          <CopyEmailButton email={profile.email} />
        </div>
      </div>
    </Section>
  )
}
