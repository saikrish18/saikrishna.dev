import { useQuery } from '@tanstack/react-query'
import { fetchProfile } from '../api/profileApi'

export function useProfile() {
  return useQuery({ queryKey: ['profile'], queryFn: fetchProfile })
}
