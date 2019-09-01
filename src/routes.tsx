import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { createFluidNavigator } from 'react-navigation-fluid-transitions'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

import {
  HomeScreen,
  UserListScreen,
  DetailsScreen
} from './screens'
import {
  ScreenTransition
} from './components'

import {
  NavigationService
} from './services'

const FluidNavigator = createFluidNavigator(
  {
    userList: { screen: UserListScreen },
    details: { screen: NavigationService.mapNavigationStateParamsToProps(DetailsScreen) },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: true,
      header: null
    }
  }
)

const MainNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen },
  }
)

const AppNavigator = createAnimatedSwitchNavigator(
  {
    Main: { screen: MainNavigator },
    FluidNavigator,
  },
  {
    initialRouteName: 'Main',
    transition: <ScreenTransition />
  }
)

export default createAppContainer(AppNavigator)
