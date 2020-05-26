import { User } from '../models'
import SQLiteService from './sqlite'

const getUser = async (id: string) => {
  const query = 'SELECT * FROM users u WHERE u.id=?;'
  return SQLiteService.getFirstItem(query, [id])
}

const addUser = (user: User) => {
  return SQLiteService.executeSql(
    `INSERT INTO users ('id', 'first', 'last', 'email', 'address', 'created', 'balance', 'photo')
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

export default {
  getUser,
  addUser,
}
