import { about } from '../../data/profile'
import Section from '../ui/Section'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Frontend engineering, applied to real products">
      <div className="max-w-3xl space-y-5">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-[var(--color-body)] sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
