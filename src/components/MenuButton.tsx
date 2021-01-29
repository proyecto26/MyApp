import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { NavigationInjectedProps } from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'

const MenuButton = ({ navigation }: NavigationInjectedProps) => (
  <Icon.Button
    name="menu"
    size={30}
    activeOpacity={0.7}
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    color="black"
    backgroundColor="transparent"
    underlayColor="transparent"
  />
)

export default MenuButton
