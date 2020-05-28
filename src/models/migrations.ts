import {
  schemaMigrations,
  createTable,
} from '@nozbe/watermelondb/Schema/migrations'
import { COLUMNS as PhotoColumns } from './photo'
import { COLLECTIONS } from '../constants'

export default schemaMigrations({
  migrations: [
    {
      toVersion: 1,
      steps: [
        createTable({
          name: COLLECTIONS.PHOTOS,
          columns: PhotoColumns,
        }),
      ],
    },
  ],
})
