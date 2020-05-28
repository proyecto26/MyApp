import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class Photo extends Model {
  static table = 'photos'

  @field('first') first?: string
  @field('last') last?: string
  @field('email') email!: string
  @field('address') address?: string
  @field('created') created?: string
  @field('balance') balance?: string
  @field('photo') photo?: string
}
