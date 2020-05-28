import { Model, ColumnSchema } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { COLLECTIONS } from '../constants'

export default class Photo extends Model {
  static table = COLLECTIONS.PHOTOS

  @field('first') first?: string
  @field('last') last?: string
  @field('email') email!: string
  @field('address') address?: string
  @field('created') created?: string
  @field('balance') balance?: string
  @field('photo') photo?: string
}

export const COLUMNS: ColumnSchema[] = [
  { name: 'email', type: 'string', isIndexed: true },
  { name: 'first', type: 'string' },
  { name: 'last', type: 'string' },
  { name: 'address', type: 'string', isOptional: true },
  { name: 'created', type: 'string' },
  { name: 'balance', type: 'string' },
  { name: 'photo', type: 'string', isOptional: true },
]
