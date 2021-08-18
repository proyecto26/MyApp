import React, { ComponentType } from 'react'
import {
  StackActions,
  NavigationActions,
  NavigationContainer,
  NavigationParams,
  NavigationRoute,
  NavigationNavigateActionPayload,
  NavigationState,
  NavigationContainerComponent,
} from 'react-navigation'

let _navigator: NavigationContainer & NavigationContainerComponent

/**
 * Save the navigator of the App
 * @param {object} navigatorRef - The navigator of the app
 */
function setTopLevelNavigator(navigatorRef: any): void {
  _navigator = navigatorRef || _navigator
}

/**
 * Validate if the type is a NavigationNavigateActionPayload
 * @param {(string|object)} obj - The options of a route
 */
function isNavigatePayload(obj: any): obj is NavigationNavigateActionPayload {
  return obj.key || obj.routeName
}

/**
 * Navigate from any component or service
 * @param {(string|object)} routeNameOrOptions - The name of the route or all the info of the new route
 * @param {object} params - The params of the new route
 */
function navigate(
  routeNameOrOptions: string | NavigationNavigateActionPayload,
  params?: NavigationParams,
): void {
  let options: NavigationNavigateActionPayload = {
    routeName: '',
  }
  if (isNavigatePayload(routeNameOrOptions)) {
    options = routeNameOrOptions
  } else {
    options = {
      routeName: routeNameOrOptions,
    }
  }
  if (params) {
    options.params = params
  }

  _navigator.dispatch(NavigationActions.navigate(options))
}

/**
 * Reset the history of the navigation with a new route
 * @param {object} newRoute - The new route
 * @param {object} backRoute - An optional previous route for back navigation
 * @flow
 */
function navigateRoot(
  newRoute: NavigationNavigateActionPayload,
  backRoute?: NavigationNavigateActionPayload,
) {
  let index = 0
  let actions = []
  if (backRoute) {
    index = 1
    actions.push(NavigationActions.navigate(backRoute))
  }
  actions.push(NavigationActions.navigate(newRoute))
  const resetAction = StackActions.reset({
    index,
    key: null,
    actions,
  })
  _navigator.dispatch(resetAction)
}

/**
 * Navigate to a previous screen
 */
function goBack(options?: NavigationNavigateActionPayload) {
  _navigator.dispatch(NavigationActions.back(options))
}

/**
 * Get the active route
 * @param {object} navigationState - The state of the navigation with their routes
 */
function getActiveRoute(
  navigationState?: NavigationRoute<NavigationParams> | NavigationState,
): NavigationRoute<NavigationParams> | null {
  const currentNavigationState =
    navigationState || (_navigator && _navigator.state.nav)
  if (!currentNavigationState || !currentNavigationState.routes) {
    return null
  }
  const route = currentNavigationState.routes[currentNavigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getActiveRoute(route)
  }
  return route
}

/**
 * Get the name of the active route
 * @param {object} navigationState - The state of the navigation
 */
function getActiveRouteName(navigationState: NavigationState) {
  const route = getActiveRoute(navigationState)
  return route && route.routeName
}

/**
 * A Higher Order Component (HOC) to pass the params of the navigation as properties
 */
const mapNavigationStateParamsToProps =
  (WrappedComponent: ComponentType<any>) => (props: any) => {
    const {
      navigation: {
        state: { params },
      },
    } = props
    return <WrappedComponent {...params} {...props} />
  }

// add other navigation functions that you need and export them

export default {
  goBack,
  navigate,
  navigateRoot,
  getActiveRoute,
  getActiveRouteName,
  setTopLevelNavigator,
  mapNavigationStateParamsToProps,
}
