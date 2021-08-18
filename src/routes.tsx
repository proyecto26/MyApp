import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

import {
  HomeScreen,
  MenuScreen,
  PhotoListScreen,
  DetailsScreen,
  OfflineListScreen,
} from './screens'
import { ScreenTransition } from './components'

import { SCREENS } from './constants'

const SharedElementsNavigator = createSharedElementStackNavigator(
  {
    [SCREENS.PHOTO_LIST]: PhotoListScreen,
    [SCREENS.OFFLINE_LIST]: OfflineListScreen,
    [SCREENS.DETAILS]: DetailsScreen,
  },
  {
    mode: 'modal',
  },
) as any

const MenuNavigator = createDrawerNavigator(
  {
    SharedElementsNavigator,
  },
  {
    contentComponent: props => <MenuScreen {...props} />,
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    drawerType: 'slide',
  },
)

const AppNavigator = createAnimatedSwitchNavigator(
  {
    home: createStackNavigator({ HomeScreen }),
    MenuNavigator,
  },
  {
    initialRouteName: 'home',
    transition: <ScreenTransition />,
  },
)

export default createAppContainer(AppNavigator)
