import { Client } from 'bugsnag-react-native'
import { BUGSNAG_KEY } from '../constants'
const bugsnag = new Client(BUGSNAG_KEY)

export default {
  logError: (err: Error) => {
    bugsnag.notify(err)
  }
}