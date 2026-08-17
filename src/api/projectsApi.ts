import { apiGet } from './client'
import type { Project } from './types'

export function fetchProjects(previewToken?: string | null): Promise<Project[]> {
  const query = previewToken ? `?previewToken=${encodeURIComponent(previewToken)}` : ''
  return apiGet<Project[]>(`/api/v1/projects${query}`)
}

export function fetchProjectBySlug(slug: string): Promise<Project> {
  return apiGet<Project>(`/api/v1/projects/${slug}`)
}
