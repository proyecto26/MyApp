/**
 * Common constants into the app
 */
import { Platform } from 'react-native'

export const ENVIRONMENTS = {
  NONPROD: 'NONPROD',
  PROD: 'PROD',
}
export const ENV = __DEV__ ? 'NONPROD' : 'PROD'

export const APP_NAME = Platform.OS === 'ios' ? 'MyApp-iOS' : 'MyApp-Android'

export const API_URL = `https://randomapi.com/api`
export const API_KEY = '6de6abfedb24f889e0b5f675edc50deb'
export const API_TIMEOUT = 2000
export const BUGSNAG_KEY = '05ff8570b88f5993959ecc8323d7163e'

export * from './screens'
export * from './database'

export default {
  ENVIRONMENTS,
  ENV,
  APP_NAME,
  API_URL,
  API_KEY,
  API_TIMEOUT,
  BUGSNAG_KEY,
}
