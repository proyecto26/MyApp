import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { DrawerContentComponentProps } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Image from 'react-native-scalable-image'

import { NavigationService } from '../../services'
import { SCREENS } from '../../constants'
import styles from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type MenuItemProps = {
  icon: string
  label: string
  onPress: () => void
}

const items: MenuItemProps[] = [
  {
    label: 'Photo list',
    icon: 'supervisor-account',
    onPress: () =>
      NavigationService.navigateRoot({ routeName: SCREENS.PHOTO_LIST }),
  },
  {
    label: 'Offline list',
    icon: 'get-app',
    onPress: () =>
      NavigationService.navigateRoot({ routeName: SCREENS.OFFLINE_LIST }),
  },
]

const MenuItem = (props: MenuItemProps) => {
  const insets = useSafeAreaInsets()
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ paddingLeft: insets.left }}>
      <View style={styles.item}>
        <Icon.Button
          name={props.icon}
          activeOpacity={0.7}
          size={30}
          backgroundColor="transparent"
          underlayColor="transparent"
          color="black"
          style={styles.icon}
        />
        <Text style={styles.label}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const MenuScreen = (props: DrawerContentComponentProps) => {
  return (
    <SafeAreaView
      style={styles.fullSize}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={[styles.header, styles.item]}>
        <Image
          width={60}
          borderRadius={60 / 2}
          source={{ uri: 'https://proyecto26.com/img/logo.png' }}
          style={styles.pic}
        />
        <View style={styles.fullSize}>
          <Text style={styles.title}>Proyecto 26</Text>
          <Text style={styles.subtitle}>
            Changing the world with small contributions 🧚
          </Text>
        </View>
      </View>
      <ScrollView>
        {items.map(item => (
          <MenuItem {...item} key={item.label} />
        ))}
      </ScrollView>
      <MenuItem
        label="Logout"
        icon="exit-to-app"
        onPress={() => props.navigation.navigate(SCREENS.HOME)}
      />
    </SafeAreaView>
  )
}

export default MenuScreen
