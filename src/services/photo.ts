import { Photo } from '../models'
import { getDatabase } from './database'
import { COLLECTIONS } from '../constants'

const getPhotosCollection = () =>
  getDatabase().collections.get<Photo>(COLLECTIONS.PHOTOS)

const getPhoto = async (id: string) => {
  try {
    const photo = await getPhotosCollection().find(id)
    return photo
  } catch {
    return null
  }
}

const getPhotos = (): Promise<Photo[]> => getPhotosCollection().query().fetch()

const addPhoto = async (newPhoto: Photo) => {
  await getDatabase().write(async () => {
    await getPhotosCollection().create(photo => {
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
  await getDatabase().write(async () => {
    const photo = await getPhotosCollection().find(id)
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
