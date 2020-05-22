import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
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

const FluidNavigator = createSharedElementStackNavigator(
  {
    userList: { screen: UserListScreen },
    details: NavigationService.mapNavigationStateParamsToProps(DetailsScreen),
  },
  {
    mode: 'modal'
  },
  {
    debug: true
  }
)

const MainNavigator = createStackNavigator(
  {
    home: HomeScreen,
  }
)

const AppNavigator = createAnimatedSwitchNavigator(
  {
    Main: MainNavigator,
    FluidNavigator,
  },
  {
    initialRouteName: 'Main',
    transition: <ScreenTransition />
  }
)

export default createAppContainer(AppNavigator)
