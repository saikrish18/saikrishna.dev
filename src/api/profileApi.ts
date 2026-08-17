import { apiGet } from './client'
import type { Profile } from './types'

export function fetchProfile(): Promise<Profile> {
  return apiGet<Profile>('/api/v1/profile')
}
