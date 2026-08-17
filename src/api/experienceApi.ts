import { apiGet } from './client'
import type { Experience } from './types'

export function fetchExperience(): Promise<Experience[]> {
  return apiGet<Experience[]>('/api/v1/experience')
}
