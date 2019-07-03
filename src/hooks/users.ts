import { useState, useEffect } from 'react'
import { ApiService } from '../services'
import { User } from '../models'

export const useUserList = function () {
  const [users, setUsers] = useState<User[]>([])
  useEffect(function () {
    ApiService.getUsers()
    .then((myData) => setUsers(myData))
  }, [])

  return users
}