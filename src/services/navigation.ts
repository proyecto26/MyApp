import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams,
  NavigationNavigateActionPayload
} from 'react-navigation'

let _navigator : NavigationContainerComponent | null

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent | null) {
  _navigator = navigatorRef
}

function isNavigatePayload(obj: any): obj is NavigationNavigateActionPayload {
  return obj.routeName !== undefined 
}

function navigate(routeNameOrOptions: string | NavigationNavigateActionPayload, params?: NavigationParams) {
  
  let options: NavigationNavigateActionPayload = {
    routeName: ''
  }
  if (isNavigatePayload(routeNameOrOptions)) {
    options = routeNameOrOptions
  }
  else {
    options = {
      routeName: routeNameOrOptions
    }
  }
  if (params) {
    options.params = params
  }
  
  _navigator && _navigator.dispatch(
    NavigationActions.navigate(options)
  )
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
}