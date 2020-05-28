import { User } from '../models'
import SQLiteService from './sqlite'
import { COLLECTIONS } from '../constants'

const collection = COLLECTIONS.USERS

const getUser = async (id: string) => {
  const query = `SELECT * FROM ${collection} u WHERE u.id=?;`
  return SQLiteService.getFirstItem(query, [id])
}

const addUser = (user: User) => {
  return SQLiteService.executeSql(
    `INSERT INTO ${collection} ('id', 'first', 'last', 'email', 'address', 'created', 'balance', 'photo')
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
    [
      user.id,
      user.first,
      user.last,
      user.email,
      user.address,
      user.created,
      user.balance,
      user.photo,
    ],
  )
}

const deleteUser = (id: string) => {
  const query = `DELETE FROM ${collection} WHERE id=?;`
  return SQLiteService.executeSql(query, [id])
}

export default {
  getUser,
  addUser,
  deleteUser,
}
