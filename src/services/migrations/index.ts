import SQLiteService from '../sqlite'
import LogService from '../log'
import migrationCreateTables from './createTables'
import { Migration } from './migration'
import { mapSeries } from '../promise'

const TABLE_MIGRATION = 'migrations'

const migrations: Array<Migration> = [migrationCreateTables]

const applyMigration = async ({ id, queries }: Migration) => {
  try {
    await SQLiteService.executeSql(
      `INSERT INTO '${TABLE_MIGRATION}' ('id') VALUES (?);`,
      [id],
    )
    await SQLiteService.sqlBatch(queries)
  } catch (error) {
    LogService.logError(error)
  }
}

export const runMigrations = async () => {
  await SQLiteService.executeSql(
    `CREATE TABLE IF NOT EXISTS '${TABLE_MIGRATION}' (id TEXT PRIMARY KEY);`,
  )
  const migration: Array<Migration> = await SQLiteService.getItems(
    `SELECT * FROM ${TABLE_MIGRATION};`,
  )

  await mapSeries(
    migrations.map((newMigration) => {
      if (!migration.some(({ id }) => newMigration.id === id)) {
        return applyMigration(newMigration)
      }
      return Promise.resolve()
    }),
  )
}
