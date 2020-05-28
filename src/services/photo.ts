import { Photo } from '../models'
import database from './database'
import { COLLECTIONS } from '../constants'

const photosCollection = database.collections.get<Photo>(COLLECTIONS.PHOTOS)

const getPhoto = async (id: string) => {
  try {
    const photo = await photosCollection.find(id)
    return photo
  } catch {
    return null
  }
}

const getPhotos = (): Promise<Photo[]> => photosCollection.query().fetch()

const addPhoto = async (newPhoto: Photo) => {
  await database.action(async () => {
    await photosCollection.create((photo) => {
      photo._raw.id = newPhoto.id
      for (const key in newPhoto) {
        if (newPhoto.hasOwnProperty(key)) {
          ;(photo as any)[key] = (newPhoto as any)[key]
        }
      }
    })
  })
}

const deletePhoto = async (id: string) => {
  await database.action(async () => {
    const photo = await photosCollection.find(id)
    await photo.markAsDeleted() // syncable
    await photo.destroyPermanently() // permanent
  })
}

export default {
  getPhoto,
  getPhotos,
  addPhoto,
  deletePhoto,
}
