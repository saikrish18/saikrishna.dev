export interface Profile {
  name: string
  title: string
  headline: string
  location: string
  email: string
  linkedin: string
  github: string | null
  resumeUrl: string
}

export const profile: Profile = {
  name: 'Sai Krishna',
  title: 'Senior Frontend Engineer',
  headline: 'React.js | TypeScript | Next.js | Micro Frontends | AI-Enabled Applications',
  location: 'Hyderabad, India',
  email: 'saikrishs184@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sai-krishna-b14804249',
  github: null,
  resumeUrl: '/Sai-Krishna-Resume.pdf',
}

export const hero = {
  tagline: 'Building scalable React and TypeScript applications across healthcare, AI and enterprise platforms.',
  supporting:
    '5+ years of experience in frontend engineering, microfrontend architecture, AI-enabled applications and production-grade web platforms.',
}

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '5+ Years', label: 'Frontend Engineering' },
  { value: 'React + TypeScript', label: 'Core Expertise' },
  { value: 'Micro Frontends', label: 'Module Federation' },
  { value: 'AI', label: 'Gemini + MedGemma' },
]

export const about = {
  paragraphs: [
    "I'm a Senior Frontend Engineer with 5+ years of experience building scalable, production-grade web applications using React.js and TypeScript across healthcare, AI-enabled, and enterprise SaaS platforms.",
    'My focus areas are frontend architecture, microfrontend systems built with Webpack Module Federation, API integration, reusable component design, testing, and performance optimization.',
    'I currently own frontend delivery across a multi-portal, multi-tenant healthcare platform and an AI-powered software testing product, collaborating closely with backend and product teams from development through production — including integrating AI-powered capabilities such as Gemini and MedGemma into real product workflows.',
  ],
}

export interface ExpertiseCard {
  title: string
  items: string[]
}

export const coreExpertise: ExpertiseCard[] = [
  { title: 'Frontend Engineering', items: ['React.js', 'TypeScript', 'JavaScript', 'Next.js'] },
  {
    title: 'Frontend Architecture',
    items: ['Micro Frontends', 'Module Federation', 'Reusable Component Architecture'],
  },
  { title: 'State & Data', items: ['Redux Toolkit', 'Redux', 'React Query', 'Context API', 'GraphQL'] },
  { title: 'Testing', items: ['Jest', 'Vitest', 'React Testing Library'] },
  { title: 'AI Integration', items: ['Gemini', 'MedGemma'] },
  { title: 'Enterprise Applications', items: ['Healthcare platforms', 'Multi-tenant systems', 'SaaS applications'] },
]

export interface FeaturedProject {
  name: string
  type: string
  description: string
  highlights: string[]
  tech: string[]
  liveUrl?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Ratna HealthPlex',
    type: 'Unified Healthcare Platform',
    description:
      'A multi-portal healthcare platform spanning Admin, Physician, Nurse, Patient, Pharmacy, and Laboratory portals, covering telemedicine, EMR, prescription, and laboratory workflows across a multi-tenant architecture.',
    highlights: [
      'Architected independently deployable microfrontends using Webpack Module Federation across three concurrent products.',
      'Owned the Consent Management, DSAR, Breach Management, and Audit & Security modules.',
      "Collaborated with backend engineers on tenant-aware APIs supporting the platform's multi-tenant architecture.",
    ],
    tech: ['React.js', 'TypeScript', 'Micro Frontends', 'Module Federation', 'React Query', 'REST APIs'],
    liveUrl: 'https://ratnahealthplex.com/',
  },
  {
    name: 'Ratna Test AI',
    type: 'AI-Powered Software Testing Platform',
    description:
      'A Gemini-powered platform that automates test-case generation and supports full-cycle testing, defect tracking, and CI/CD-integrated release workflows.',
    highlights: [
      "Built the platform's frontend end-to-end for its AI-powered testing workflows.",
      'Integrated REST and GraphQL services to drive automated test-execution and defect-tracking interfaces.',
    ],
    tech: ['React.js', 'TypeScript', 'Gemini', 'REST APIs', 'GraphQL'],
    liveUrl: 'https://ratnatest.ai/',
  },
  {
    name: 'Dr. Basu Eyecare',
    type: 'Multi-Branch Clinic Platform',
    description:
      'Onboarding of a multi-branch clinic client onto the shared HealthPlex multi-tenant platform, extending its core modules for a new tenant.',
    highlights: [
      'Onboarded the clinic onto the shared multi-tenant platform, inheriting its existing MedGemma-powered eye-image review capability.',
      'Extended shared Front Office, Doctor Consultation, Lead Management CRM, Pharmacy, and Admin modules, including Reports, Notifications, and Download Center capabilities.',
    ],
    tech: ['React.js', 'TypeScript', 'MedGemma', 'Multi-Tenant Architecture'],
    liveUrl: 'https://drbasu.ratnahealthplex.com/login',
  },
]

export interface OtherProject {
  name: string
  type: string
  oneLiner: string
  tech: string[]
  liveUrl?: string
}

export const otherProjects: OtherProject[] = [
  {
    name: 'PPBET',
    type: 'Multi-Brand Betting Platform',
    oneLiner:
      'Multi-brand sports-betting and casino platform spanning country-specific brands — including QuinnBet (Ireland), BeeBet (Japan), and PPBet Turkey — with real-time odds updates and personalized notifications, built on a shared reusable component library.',
    tech: ['React.js', 'Next.js', 'dotCMS'],
  },
  {
    name: 'DDRL',
    type: 'Real Estate Marketplace',
    oneLiner:
      'Cross-platform property-search app integrating Google Maps and real-time chat between buyers and agents.',
    tech: ['React Native', 'Firebase'],
  },
  {
    name: 'Marketing Management',
    type: 'CRM Platform',
    oneLiner: 'Client-facing CRM platform for managing clients, calls, meetings, and tasks.',
    tech: ['React.js', 'Redux', 'TypeScript', 'Material UI', 'Jest'],
  },
  {
    name: 'Tech Passport',
    type: 'Skills-Tracking Platform',
    oneLiner:
      'Skills-tracking platform giving students test-based performance feedback, with admin tools for trainers, training plans, and assessments.',
    tech: ['React', 'Node.js'],
  },
  {
    name: 'Dental App',
    type: 'Clinic Appointment Platform',
    oneLiner: 'Appointment booking platform enabling doctor assignment and patient communication.',
    tech: ['React', 'TypeScript'],
  },
]

export interface ExperienceEntry {
  company: string
  title: string
  period: string
  current: boolean
  summary: string
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Ratna Global Technologies',
    title: 'Member of Technical Staff II',
    period: 'Oct 2025 — Present',
    current: true,
    summary:
      'Own frontend delivery across three concurrent products on a multi-tenant healthcare and AI-testing platform, architected as independently deployable microfrontends using Webpack Module Federation.',
  },
  {
    company: 'Techmojo Solutions',
    title: 'Member of Technical Staff',
    period: 'Dec 2023 — Mar 2025',
    current: false,
    summary:
      'Delivered a cross-platform real estate marketplace app and a multi-brand betting platform, partnering closely with the engineering team on UI requirements, design reviews, and release stability.',
  },
  {
    company: 'Protonshub Technologies',
    title: 'React JS Developer',
    period: 'May 2022 — Feb 2023',
    current: false,
    summary:
      'Owned frontend development for a client-facing CRM platform, covering core workflows with Jest test suites.',
  },
  {
    company: 'Tanama Software Pvt Ltd',
    title: 'React JS Developer',
    period: 'Mar 2020 — May 2022',
    current: false,
    summary:
      'Built a skills-tracking platform and a dental clinic appointment app, establishing initial frontend architecture and UI patterns as an early-career React developer.',
  },
]

export interface FocusItem {
  title: string
  description: string
}

export const engineeringFocus: FocusItem[] = [
  {
    title: 'Micro Frontends & Module Federation',
    description:
      'Architected independently deployable microfrontends using Webpack Module Federation across multiple concurrent products.',
  },
  {
    title: 'Frontend Architecture',
    description:
      'Own frontend delivery across multi-portal, multi-tenant platforms, with a focus on reusable, maintainable component architecture.',
  },
  {
    title: 'API-Driven Applications',
    description:
      'Integrate REST and GraphQL services, and collaborate with backend engineers on tenant-aware APIs for multi-tenant systems.',
  },
  {
    title: 'Testing & Reliability',
    description: 'Use Jest, Vitest, and React Testing Library to cover core workflows and guard against regressions.',
  },
  {
    title: 'Performance Optimization',
    description: 'Focus on responsive, accessible, performant interfaces across enterprise-scale applications.',
  },
  {
    title: 'CI/CD-Integrated Delivery',
    description: 'Contribute to CI/CD-integrated release workflows, from development through production ownership.',
  },
]

export interface AiItem {
  name: string
  description: string
}

export const aiSection = {
  intro:
    "AI is a growing part of the products I build — from automated software testing to AI-assisted medical image review. My role is frontend integration and product implementation of AI-powered functionality, not model training.",
  items: [
    {
      name: 'Gemini',
      description:
        'Powers automated test-case generation and full-cycle testing workflows on Ratna Test AI — I built the frontend and integrated the REST/GraphQL services that drive its test-execution and defect-tracking interfaces.',
    },
    {
      name: 'MedGemma',
      description:
        "Powers an image-review feature on Ratna HealthPlex and Dr. Basu Eyecare that flags findings for doctor follow-up — I integrated this capability into the product's clinical workflows.",
    },
  ] as AiItem[],
}

export interface TechGroup {
  title: string
  items: string[]
}

export const techStack: TechGroup[] = [
  { title: 'Frontend', items: ['React.js', 'TypeScript', 'JavaScript', 'Next.js', 'React Native'] },
  { title: 'Architecture', items: ['Micro Frontends', 'Module Federation', 'Webpack', 'Vite'] },
  { title: 'State & Data', items: ['Redux Toolkit', 'Redux', 'React Query', 'Context API', 'GraphQL'] },
  { title: 'Testing', items: ['Jest', 'Vitest', 'React Testing Library'] },
  { title: 'UI', items: ['Material UI', 'Tailwind CSS', 'Bootstrap', 'Chart.js'] },
  { title: 'Backend & API', items: ['REST APIs', 'GraphQL', 'Node.js', 'Java', 'PostgreSQL', 'MySQL'] },
  { title: 'AI', items: ['Gemini', 'MedGemma'] },
  { title: 'Tools', items: ['Git', 'Postman', 'Figma', 'Chrome DevTools'] },
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
  { label: 'Contact', href: '#contact' },
]
