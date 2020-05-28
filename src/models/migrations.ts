import {
  schemaMigrations,
  addColumns,
} from '@nozbe/watermelondb/Schema/migrations'
import { COLLECTIONS } from '../constants'

export default schemaMigrations({
  migrations: [
    // TODO: Add migrations always! <3
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: COLLECTIONS.PHOTOS,
          columns: [{ name: 'address2', type: 'string', isOptional: true }],
        }),
      ],
    },
  ],
})
