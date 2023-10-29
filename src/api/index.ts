import $axios from "axios"
import { API_RESPONSE } from '@/shared-types/index.ts';

export const getUsersFromApi = (page) => {
  const resource = `https://reqres.in/api/users?page=${page}`
  return $axios.get<API_RESPONSE>(`${resource}`)
}