import { useState, useEffect } from 'react'
import { ApiService } from '../services'
import { User } from '../models'

export const useUserList = function (initial: User[] = []) {
  const [users, setUsers] = useState(initial)
  useEffect(function () {
    ApiService.getUsers()
    .then((myData) => setUsers(myData))
  }, [])

  return users
}