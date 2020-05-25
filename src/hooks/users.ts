import { useState, useEffect } from 'react'
import { ApiService } from '../services'
import { User } from '../models'

export const useUserList = function (): User[] {
  const [users, setUsers] = useState([] as User[])
  useEffect(function (): any {
    ApiService.getUsers().then(setUsers)
  }, [])

  return users
}
