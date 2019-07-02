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

const FluidNavigator = createFluidNavigator(
  {
    userList: { screen: UserListScreen },
    details: { screen: DetailsScreen },
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
    transition: <ScreenTransition /> as any //TODO: Remove this workaround
  }
)

export default createAppContainer(AppNavigator)
