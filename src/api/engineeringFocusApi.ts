import { apiGet } from './client'
import type { EngineeringFocus } from './types'

export function fetchEngineeringFocus(): Promise<EngineeringFocus[]> {
  return apiGet<EngineeringFocus[]>('/api/v1/engineering-focus')
}
