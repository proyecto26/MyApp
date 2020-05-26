import axios from 'axios'
import { get, map } from 'lodash'
import { API_URL, API_KEY, API_TIMEOUT } from '../constants'
import { User } from '../models'

const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_URL}/${API_KEY}`, {
    params: {
      fmt: 'json',
    },
    timeout: API_TIMEOUT,
  })
  return map<User, User>(get(response, 'data.results[0]', []), (u, i) => ({
    ...u,
    id: String(i),
    photo: `https://picsum.photos/id/${i}/200/200`,
  }))
}

export default {
  getUsers,
}
