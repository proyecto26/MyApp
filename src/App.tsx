/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react'
// import AppContainer from './routes'
import { ErrorContainer } from './containers'

export default class App extends Component {

  state = {
    hasError: false,
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (__DEV__) {
      console.log(`Error: ${error.message}`)
      console.log(info)
    }
    this.setState({ hasError: true })
  }

  render() {
    // const { hasError } = this.state
    return <ErrorContainer />
  }
}