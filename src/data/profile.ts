export interface Principle {
  title: string
  description: string
}

export const engineeringPrinciples: Principle[] = [
  {
    title: 'Architecture',
    description: 'Structure frontends as independently deployable microfrontends rather than monolithic bundles.',
  },
  {
    title: 'Reliability',
    description: 'Cover core workflows with Jest, Vitest, and React Testing Library to guard against regressions.',
  },
  {
    title: 'Accessibility',
    description: 'Build interfaces with keyboard support, semantic HTML, and visible focus states by default.',
  },
  {
    title: 'Performance',
    description: 'Treat load time and responsiveness as product requirements, not afterthoughts.',
  },
  {
    title: 'Reusable Components',
    description: 'Design shared component libraries that multiple product teams build on, not one-off UI.',
  },
  {
    title: 'Production Ownership',
    description: 'Own delivery from initial development through production, not just the initial build.',
  },
]

export interface LabDemo {
  id: string
  title: string
  demonstrates: string
}

export const engineeringLab: LabDemo[] = [
  {
    id: 'responsive-layout',
    title: 'Responsive Layout',
    demonstrates: 'CSS Grid with clamp()-based fluid sizing that adapts continuously, not just at fixed breakpoints.',
  },
  {
    id: 'accessible-dialog',
    title: 'Accessible Dialog',
    demonstrates: 'Focus trapping, Escape-to-close, and scroll locking built on the same Modal used across this site.',
  },
  {
    id: 'state-management',
    title: 'Live State Demo',
    demonstrates: 'Controlled component state driving derived UI and simulated async status transitions.',
  },
  {
    id: 'component-composition',
    title: 'Component Composition',
    demonstrates: 'A reusable, accessible Tabs primitive composed from smaller pieces with keyboard arrow-key support.',
  },
]

export const contact = {
  heading: "Let's build something great.",
  text: "I'm open to Senior Frontend Engineer opportunities and international relocation.",
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'AI', href: '#ai' },
  { label: 'Engineering Lab', href: '#lab' },
  { label: 'Contact', href: '#contact' },
]
