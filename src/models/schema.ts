import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'photos',
      columns: [
        { name: 'email', type: 'string', isIndexed: true },
        { name: 'first', type: 'string' },
        { name: 'last', type: 'string' },
        { name: 'address', type: 'string', isOptional: true },
        { name: 'created', type: 'string' },
        { name: 'balance', type: 'string' },
        { name: 'photo', type: 'string', isOptional: true },
      ],
    }),
  ],
})
