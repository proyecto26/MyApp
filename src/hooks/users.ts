import { useState, useEffect } from 'react'
import { Api } from '../services'
import { User } from '../models'

export const useUserList = function () {
  const [users, setUsers] = useState<User[]>([])
  useEffect(function () {
    Api.getUsers()
    .then((myData) => setUsers(myData))
  }, [])

  return users
}