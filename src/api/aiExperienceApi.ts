import { apiGet } from './client'
import type { AiExperience } from './types'

export function fetchAiExperience(): Promise<AiExperience[]> {
  return apiGet<AiExperience[]>('/api/v1/ai-experience')
}
