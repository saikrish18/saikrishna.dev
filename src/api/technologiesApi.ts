import { apiGet } from './client'
import type { Technology } from './types'

export function fetchTechnologies(): Promise<Technology[]> {
  return apiGet<Technology[]>('/api/v1/technologies')
}
