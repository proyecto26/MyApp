import { useState, useEffect } from 'react'
import { ApiService } from '../services'
import { User } from '../models'

export const useUserList = function (initial: User[] = []): User[] {
  const [users, setUsers] = useState(initial)
  useEffect(function (): any {
    ApiService.getUsers().then(setUsers)
  }, [])

  return users
}