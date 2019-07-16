import axios from 'axios'
import {
  get
} from 'lodash'
import {
  API_URL,
  API_KEY,
  API_TIMEOUT
} from '../constants'
import {
  User
} from '../models'

const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_URL}/${API_KEY}`, {
    params: {
      fmt: 'json',
    },
    timeout: API_TIMEOUT
  })
  return get(response, 'data.results[0]', [])
}

export default {
  getUsers,
}