export interface Technology {
  id: string
  name: string
  category: string
  description: string | null
  icon: string | null
  featured: boolean
  displayOrder: number
  archived: boolean
}

export interface CaseStudy {
  challenge: string | null
  architectureNote: string | null
  keyAreas: string[]
  diagramKey: string | null
}

export interface Highlight {
  id: string
  text: string
  displayOrder: number
}

export interface ProjectImage {
  id: string
  url: string
  altText: string | null
  displayOrder: number
}

export interface Project {
  id: string
  title: string
  slug: string
  shortDescription: string | null
  description: string | null
  company: string | null
  role: string | null
  startDate: string | null
  endDate: string | null
  projectType: string | null
  categories: string[]
  featured: boolean
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  displayOrder: number
  liveUrl: string | null
  repositoryUrl: string | null
  isPrivate: boolean
  caseStudy: CaseStudy | null
  highlights: Highlight[]
  technologies: Technology[]
  images: ProjectImage[]
}

export interface ProjectSummary {
  id: string
  title: string
  slug: string
}

export interface Skill {
  id: string
  name: string
  category: string
  description: string | null
  featured: boolean
  displayOrder: number
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
}

export interface EngineeringFocus {
  id: string
  title: string
  description: string | null
  icon: string | null
  featured: boolean
  displayOrder: number
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  technologies: Technology[]
}

export interface Experience {
  id: string
  company: string
  jobTitle: string
  startDate: string | null
  endDate: string | null
  current: boolean
  location: string | null
  description: string | null
  displayOrder: number
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  projects: ProjectSummary[]
}

export interface WorkflowStep {
  id: string
  label: string
  description: string
  displayOrder: number
}

export interface AiExperience {
  id: string
  name: string
  description: string | null
  useCase: string | null
  project: ProjectSummary | null
  displayOrder: number
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  technologies: Technology[]
  workflowSteps: WorkflowStep[]
}

export interface Profile {
  name: string
  title: string
  headline: string
  shortBio: string | null
  longBio: string | null
  location: string | null
  availability: string | null
  relocationStatus: string | null
  email: string
  linkedinUrl: string | null
  githubUrl: string | null
  yearsOfExperience: string | null
  resumeUrl: string | null
  profileImageUrl: string | null
}
