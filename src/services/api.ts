import axios from 'axios'
import {
  get
} from 'lodash'
import {
  API_URL,
  API_KEY,
  API_REF,
} from '../constants'
import {
  User
} from '../models'

const getUsers = async () : Promise<User[]> => {
  const response = await axios.get(API_URL, {
    params: {
      key: API_KEY,
      ref: API_REF,
    }
  })
  return get(response, 'data.results', [])
}

export default {
  getUsers,
}