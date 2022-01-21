/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import { setNativeExceptionHandler } from 'react-native-exception-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavigationService, LogService } from './services'
import AppContainer from './routes'
import { ErrorContainer } from './containers'
import { withDatabaseProvider } from './hocs'
import { StoreProvider } from './store'

setNativeExceptionHandler(errorMessage => {
  LogService.logError(new Error(`NativeError: ${errorMessage}`))
})

class App extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    LogService.logError(error)
    this.setState({ hasError: true })
    if (__DEV__) {
      console.error(`ErrorInfo: ${info}`)
    }
  }

  render() {
    const { hasError } = this.state
    return (
      <StoreProvider>
        <SafeAreaProvider>
          {hasError ? (
            <ErrorContainer />
          ) : (
            <AppContainer
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef)
              }}
            />
          )}
        </SafeAreaProvider>
      </StoreProvider>
    )
  }
}

export default withDatabaseProvider(App)
