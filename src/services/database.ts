import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from '../models/schema'
import Photo from '../models/photo'

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
})

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [Photo],
  actionsEnabled: true,
})

export default database
