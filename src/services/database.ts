import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter, {
  SQLiteAdapterOptions,
} from '@nozbe/watermelondb/adapters/sqlite'

import schema from '../models/schema'
import migrations from '../models/migrations'
import Photo from '../models/photo'

let database: Database

/**
 * Get Singleton instance of the Database
 */
export function getDatabase(): Database {
  if (!database) {
    // First, create the adapter to the underlying database:
    const adapterConfig: SQLiteAdapterOptions = {
      schema,
      migrations,
    }
    const adapter = new SQLiteAdapter(adapterConfig)

    // Then, make a Watermelon database from it!
    database = new Database({
      adapter,
      modelClasses: [Photo],
    })
  }
  return database
}
