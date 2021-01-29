import axios from 'axios'
import get from 'lodash/get'
import map from 'lodash/map'
import { API_URL, API_KEY, API_TIMEOUT } from '../constants'
import { Photo } from '../models'

const getPhotos = async (): Promise<Photo[]> => {
  const response = await axios.get(`${API_URL}/${API_KEY}`, {
    params: {
      fmt: 'json',
    },
    timeout: API_TIMEOUT,
  })
  return map<any, Photo>(get(response, 'data.results[0]', []), (u, i) => ({
    ...u,
    id: String(i),
    photo: `https://picsum.photos/id/${i}/200/200`,
  }))
}

export default {
  getPhotos,
}
