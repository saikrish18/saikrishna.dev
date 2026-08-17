import { apiGet } from './client'
import type { Skill } from './types'

export function fetchSkills(): Promise<Skill[]> {
  return apiGet<Skill[]>('/api/v1/skills')
}
