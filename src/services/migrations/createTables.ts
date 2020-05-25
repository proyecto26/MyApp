export default {
  id: 'CREATE_TABLES',
  queries: [
    'DROP TABLE IF EXISTS users;',
    `CREATE TABLE users (
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
