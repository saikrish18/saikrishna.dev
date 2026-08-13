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
    'My focus areas are frontend architecture, microfrontend systems built with Vite Module Federation, API integration, reusable component design, testing, and performance optimization.',
    'I currently own frontend delivery across a multi-portal, multi-tenant healthcare platform and an AI-powered software testing product, collaborating closely with backend and product teams from development through production — including integrating AI-powered capabilities such as Gemini and MedGemma into real product workflows.',
  ],
}

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

export type ProjectCategory = 'Healthcare' | 'AI' | 'Enterprise' | 'Mobile'

export interface CaseStudy {
  challenge: string
  architectureNote: string
  keyAreas: string[]
  diagram: 'healthplex' | 'testai' | 'drbasu'
}

export interface FeaturedProject {
  name: string
  type: string
  categories: ProjectCategory[]
  description: string
  contribution: string[]
  tech: string[]
  liveUrl?: string
  isPrivate?: boolean
  caseStudy: CaseStudy
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Ratna HealthPlex',
    type: 'Unified Healthcare Platform',
    categories: ['Healthcare', 'Enterprise'],
    description:
      'A multi-tenant healthcare platform built as 8 independently deployable micro-frontends — Admin, Auth, Physician, Nurse, Patient, Pharmacy, Laboratory, and Landing — composed via Vite Module Federation within a pnpm monorepo, sharing a common design system, authentication layer, and Redux store. Includes HIPAA/DPDP compliance tooling (breach management, consent management, DSAR) alongside clinical workflows like pharmacy dispensing and prescription management.',
    contribution: [
      'Built and refactored UI for HIPAA/DPDP-compliant Breach Management, Audit Management, Consent Management, and DSAR screens, integrating React Query-driven API layers with role-based access control.',
      "Delivered end-to-end UI and API integration for the Pharmacy module's Prescription and Dispense screens, including barcode-scanning workflows for medication verification, and built its Dashboard from scratch with live operational metrics.",
      'Integrated a MedGemma-powered image-review feature that flags clinical findings for doctor follow-up, and collaborated with backend engineers on tenant-aware APIs supporting the multi-tenant architecture.',
      'Contributed to a CI/CD pipeline building per-app Docker images, pushing to AWS ECR, and auto-deploying via a GitOps workflow triggered on merge.',
      'Also contributed Java-based backend changes supporting the platform\'s shared services, alongside primary frontend ownership.',
    ],
    tech: ['React 19', 'TypeScript', 'Vite', 'Module Federation', 'Redux Toolkit', 'React Query', 'Material UI', 'Java'],
    liveUrl: 'https://ratnahealthplex.com/',
    caseStudy: {
      challenge:
        'Serve eight independently deployable applications — Admin, Auth, Physician, Nurse, Patient, Pharmacy, Laboratory, and Landing — from one platform, without duplicating code, while meeting HIPAA/DPDP compliance requirements for breach management, consent, and data subject access requests.',
      architectureNote:
        'A pnpm monorepo composes all eight applications at runtime via Vite Module Federation, with every app sharing a common design system, authentication layer, and Redux store.',
      keyAreas: ['Micro Frontend Architecture', 'Vite Module Federation', 'Regulatory Compliance UI (HIPAA/DPDP)', 'pnpm Monorepo Tooling'],
      diagram: 'healthplex',
    },
  },
  {
    name: 'Ratna Test AI',
    type: 'AI-Powered Software Testing Platform',
    categories: ['AI', 'Enterprise'],
    description:
      'A React/TypeScript monorepo of 16+ independent testing microfrontends — spanning UI/UX, database, API, security, and compliance testing — built with pnpm and Vite Module Federation, supporting AI-assisted test generation, full-cycle execution, defect tracking, and CI/CD-integrated release workflows.',
    contribution: [
      'Owned the UI/UX Testing micro-frontend end-to-end, migrating it from a monolithic React app into an independent Vite Module Federation remote, and built manual, recorded, and AI-generated test-case authoring and execution, along with its authentication/session handling and Axios API client.',
      'Implemented cross-browser and multi-device test execution via distributed agent nodes, self-healing test locators, and parameterized/data-driven testing, along with reporting dashboards, audit logging, and project/team management features.',
      'Migrated the Database Testing module into its own micro-frontend, integrating REST APIs for test execution and connection management across SQL, NoSQL, time-series, and graph databases, refactoring its state management to React hooks with a watch-based update pattern, and standardizing icon usage on FontAwesome to match the shared design system.',
      'Contributed platform-level shell integration — routing, port configuration, and landing page setup — supporting federation across all 16 domain modules.',
      'Also contributed Java-based backend changes supporting the platform\'s shared services, alongside primary frontend ownership.',
    ],
    tech: ['React.js', 'TypeScript', 'Vite', 'Module Federation', 'Gemini', 'REST APIs', 'Java'],
    liveUrl: 'https://ratnatest.ai/',
    caseStudy: {
      challenge:
        'Give test engineers a way to generate, execute, and track tests across UI, database, and API targets without hand-authoring every case from scratch.',
      architectureNote:
        'An AI-assisted pipeline turns a requirement into an executable test, runs it across environments via distributed agents, and feeds results into defect tracking and CI/CD release workflows.',
      keyAreas: ['AI-Assisted Test Authoring', 'Distributed Test Execution', 'Self-Healing Locators', 'Micro Frontend Migration'],
      diagram: 'testai',
    },
  },
  {
    name: 'Dr. Basu Eyecare',
    type: 'Multi-Branch Clinic Platform',
    categories: ['Healthcare'],
    description:
      "Onboarding of a multi-branch clinic client with multiple specialty service lines onto the shared HealthPlex multi-tenant platform — reusing its Front Office, Doctor Consultation, Lead Management CRM, Pharmacy, and Admin modules, including Reports, Notifications, and Download Center capabilities, and inheriting its existing MedGemma-powered eye-image review capability.",
    contribution: [
      'Onboarded the clinic onto the shared multi-tenant platform, inheriting its existing MedGemma-powered eye-image review capability.',
      'Extended shared Front Office, Doctor Consultation, Lead Management CRM, Pharmacy, and Admin modules, including Reports, Notifications, and Download Center capabilities.',
      'This tenant runs on the same shared HealthPlex backend — including its Java-based services — that I also contribute to alongside primary frontend ownership.',
    ],
    tech: ['React.js', 'TypeScript', 'MedGemma', 'Multi-Tenant Architecture', 'Java'],
    isPrivate: true,
    caseStudy: {
      challenge:
        'Onboard a new multi-branch clinic client onto a shared platform without building a one-off system, while preserving strict tenant data isolation.',
      architectureNote:
        "The clinic's tenant plugs into the same HealthPlex host application and shared modules — Front Office, Doctor Consultation, Lead Management CRM, Pharmacy, and Admin — isolated at the data layer, and inherits existing AI-assisted capabilities like MedGemma-powered eye-image review automatically.",
      keyAreas: ['Multi-Tenant Onboarding', 'Shared Module Reuse', 'Data Isolation', 'AI-Assisted Clinical Workflow'],
      diagram: 'drbasu',
    },
  },
]

export interface OtherProject {
  name: string
  type: string
  categories: ProjectCategory[]
  oneLiner: string
  tech: string[]
  liveUrl?: string
}

export const otherProjects: OtherProject[] = [
  {
    name: 'PPBET',
    type: 'Multi-Brand Betting Platform',
    categories: ['Enterprise'],
    oneLiner:
      'Multi-brand sports-betting and casino platform spanning country-specific brands — including QuinnBet (Ireland), BeeBet (Japan), and PPBet Turkey — with real-time odds updates and personalized notifications, built on a shared reusable component library.',
    tech: ['React.js', 'Next.js', 'dotCMS'],
  },
  {
    name: 'DDRL',
    type: 'Real Estate Marketplace',
    categories: ['Mobile'],
    oneLiner:
      'Cross-platform property-search app built in React Native and Firebase, integrating Google Maps and real-time chat between buyers and agents. Partnered directly with the engineering team on UI requirements and design reviews throughout development.',
    tech: ['React Native', 'Firebase'],
  },
  {
    name: 'Marketing Management',
    type: 'CRM Platform',
    categories: ['Enterprise'],
    oneLiner:
      'Client-facing CRM platform built in React.js, Redux, TypeScript, and Material UI for managing clients, calls, meetings, and tasks. Covered core workflows with Jest test suites to guard against regressions.',
    tech: ['React.js', 'Redux', 'TypeScript', 'Material UI', 'Jest'],
  },
  {
    name: 'Tech Passport',
    type: 'Skills-Tracking Platform',
    categories: ['Enterprise'],
    oneLiner:
      'Skills-tracking platform built in React and Node.js, giving students test-based performance feedback, with admin tools for trainers, training plans, and assessments.',
    tech: ['React', 'Node.js'],
  },
  {
    name: 'Dental App',
    type: 'Clinic Appointment Platform',
    categories: ['Healthcare'],
    oneLiner:
      'Appointment booking platform built in React and TypeScript, enabling doctor assignment and patient communication. Established initial frontend architecture and UI patterns as requirements evolved.',
    tech: ['React', 'TypeScript'],
  },
]

export interface ExperienceEntry {
  company: string
  title: string
  period: string
  current: boolean
  summary: string
  projects?: string[]
  details?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Ratna Global Technologies',
    title: 'Member of Technical Staff II',
    period: 'Oct 2025 — Present',
    current: true,
    summary:
      'Own frontend delivery across three concurrent products on a multi-tenant healthcare and AI-testing platform, architected as independently deployable microfrontends using Vite Module Federation.',
    projects: ['Ratna HealthPlex', 'Dr. Basu Eyecare', 'Ratna Test AI'],
    details: [
      'Multi-tenant healthcare platform (Ratna HealthPlex) built as 8 independently deployable micro-frontends using Vite Module Federation within a pnpm monorepo.',
      'AI-powered software testing platform (Ratna Test AI) with Gemini-assisted test-case generation, built on Vite Module Federation.',
      'MedGemma-powered medical image-review capability integrated into clinical workflows.',
      'Own frontend delivery end-to-end — architecture, delivery, and production ownership — across all three products.',
    ],
  },
  {
    company: 'Techmojo Solutions',
    title: 'Member of Technical Staff',
    period: 'Dec 2023 — Mar 2025',
    current: false,
    summary:
      'Delivered a cross-platform real estate marketplace app and a multi-brand betting platform, partnering closely with the engineering team on UI requirements, design reviews, and release stability.',
    projects: ['DDRL', 'PPBET'],
  },
  {
    company: 'Protonshub Technologies',
    title: 'React JS Developer',
    period: 'May 2022 — Feb 2023',
    current: false,
    summary:
      'Owned frontend development for a client-facing CRM platform, covering core workflows with Jest test suites.',
    projects: ['Marketing Management'],
  },
  {
    company: 'Tanama Software Pvt Ltd',
    title: 'React JS Developer',
    period: 'Mar 2020 — May 2022',
    current: false,
    summary:
      'Built a skills-tracking platform and a dental clinic appointment app, establishing initial frontend architecture and UI patterns as an early-career React developer.',
    projects: ['Tech Passport', 'Dental App'],
  },
]

export interface EngineeringDomain {
  id: string
  number: string
  title: string
  tagline: string
  tech: string[]
  visual?: 'microFrontends' | 'ai' | 'testing'
  metaNote?: string
}

export const engineeringDomains: EngineeringDomain[] = [
  {
    id: 'architecture',
    number: '01',
    title: 'Frontend Architecture',
    tagline: 'Independently deployable microfrontends, composed at runtime instead of one monolithic bundle.',
    tech: ['Micro Frontends', 'Module Federation', 'Vite'],
    visual: 'microFrontends',
    metaNote: 'Runs across 3 concurrent products',
  },
  {
    id: 'react',
    number: '02',
    title: 'Modern React',
    tagline: 'Type-safe, component-driven UI shared across web and mobile surfaces.',
    tech: ['React.js', 'Next.js', 'TypeScript', 'React Native'],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data & State',
    tagline: 'Predictable state and data-fetching patterns across multi-portal applications.',
    tech: ['Redux Toolkit', 'Redux', 'React Query', 'Context API', 'GraphQL'],
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI-Enabled Applications',
    tagline: 'Frontend integration of AI-powered workflows into real product surfaces — not model training.',
    tech: ['Gemini', 'MedGemma', 'AI-Powered Workflows'],
    visual: 'ai',
    metaNote: 'Live in production, not a prototype',
  },
  {
    id: 'quality',
    number: '05',
    title: 'Quality Engineering',
    tagline: 'Automated coverage that guards core workflows through every release.',
    tech: ['Jest', 'Vitest', 'React Testing Library', 'React Hook Form'],
    visual: 'testing',
  },
  {
    id: 'production',
    number: '06',
    title: 'Production Engineering',
    tagline: 'Owned end-to-end — integration, performance, and accessibility — through to release.',
    tech: ['API Integration', 'Performance Optimization', 'Responsive Design', 'Accessibility'],
  },
]

export interface AiWorkflowStep {
  label: string
  description: string
}

export interface AiItem {
  name: string
  description: string
  workflow: AiWorkflowStep[]
}

export const aiSection = {
  intro:
    "AI is a growing part of the products I build — from automated software testing to AI-assisted medical image review. My role is frontend integration and product implementation of AI-powered functionality, not model training.",
  items: [
    {
      name: 'Gemini',
      description:
        'Powers automated test-case generation and full-cycle testing workflows on Ratna Test AI — I built the frontend and integrated the REST/GraphQL services that drive its test-execution and defect-tracking interfaces.',
      workflow: [
        { label: 'Requirement', description: 'A test requirement or user flow is defined.' },
        { label: 'AI Generation', description: 'Gemini generates candidate test cases from the requirement.' },
        { label: 'Execution', description: 'Tests run across browsers and devices via distributed agents.' },
        { label: 'Defect Tracking', description: 'Failures are logged and routed into CI/CD release workflows.' },
      ],
    },
    {
      name: 'MedGemma',
      description:
        "Powers an image-review feature on Ratna HealthPlex and Dr. Basu Eyecare that flags findings for doctor follow-up — I integrated this capability into the product's clinical workflows.",
      workflow: [
        { label: 'Image Captured', description: 'An eye-image is captured during a clinical visit.' },
        { label: 'MedGemma Analysis', description: 'The image is analyzed for notable findings.' },
        { label: 'Flagged for Review', description: 'Findings are surfaced to the doctor for follow-up.' },
      ],
    },
  ] as AiItem[],
}

export interface TechGroup {
  title: string
  items: string[]
}

export const techStack: TechGroup[] = [
  { title: 'Frontend', items: ['React.js', 'TypeScript', 'JavaScript', 'Next.js', 'React Native', 'i18next'] },
  { title: 'Architecture', items: ['Micro Frontends', 'Module Federation', 'Vite'] },
  { title: 'State & Data', items: ['Redux Toolkit', 'Redux', 'React Query', 'Context API', 'GraphQL'] },
  { title: 'Forms & Testing', items: ['React Hook Form', 'Yup', 'Jest', 'Vitest', 'React Testing Library'] },
  { title: 'UI', items: ['Material UI', 'Tailwind CSS', 'Bootstrap', 'Chart.js'] },
  { title: 'Backend & API', items: ['REST APIs', 'GraphQL', 'Node.js', 'Java', 'PostgreSQL', 'MySQL'] },
  { title: 'AI', items: ['Gemini', 'MedGemma'] },
  { title: 'Tools', items: ['Git', 'Postman', 'Figma', 'Chrome DevTools', 'Docker', 'AWS', 'GitHub Actions'] },
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
