/**
 * Common constants into the app
 */
import {
  Platform,
} from 'react-native'

export const ENVIRONMENTS = {
  NONPROD: 'NONPROD',
  PROD: 'PROD'
}
export const ENV = __DEV__ ? 'NONPROD' : 'PROD'

export const APP_NAME = Platform.OS === 'ios' ? 'MyApp-iOS' : 'MyApp-Android'

export const API_URL = `https://randomapi.com/api`
export const API_KEY = 'HDHW-OV4M-2KEE-SNWI'
export const API_REF = 'o49jnbjh'
export const API_TIMEOUT = 10

export default {
  ENVIRONMENTS,
  ENV,
  APP_NAME,
  API_URL,
  API_KEY,
  API_REF,
  API_TIMEOUT
}