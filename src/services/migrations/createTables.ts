import { COLLECTIONS } from '../../constants'

const userCollection = COLLECTIONS.USERS

export default {
  id: 'CREATE_TABLES',
  queries: [
    `DROP TABLE IF EXISTS ${userCollection};`,
    `CREATE TABLE ${userCollection} (
      id TEXT PRIMARY KEY,
      first TEXT,
      last TEXT,
      email TEXT NOT NULL UNIQUE,
      address TEXT,
      created TEXT,
      balance TEXT,
      photo TEXT
    );`,
  ],
}
