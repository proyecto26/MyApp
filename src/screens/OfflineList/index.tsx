import React, { useReducer } from 'react'
import { SafeAreaView, NavigationInjectedProps } from 'react-navigation'
import { TouchableOpacity, Image, StatusBar, View } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import LottieView from 'lottie-react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { View as AnimatableView } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialIcons'
import R from 'res'

import { NavigationService, UserService } from '../../services'
import { CustomListContainer } from '../../containers'
import { useOfflineList } from '../../hooks'
import { User } from '../../models'
import { SCREENS, COLLECTIONS } from '../../constants'
import { MenuButton } from '../../components'
import styles from './styles'

export function onItemPress(data: User) {
  NavigationService.navigate(SCREENS.DETAILS, { data })
}

export function renderItem(item: User, forceUpdate: Function) {
  const deleteUser = () => {
    UserService.deleteUser(item.id)
    forceUpdate()
  }

  return (
    <View style={styles.item}>
      <TouchableOpacity
        testID="OfflineItem"
        key={item.email}
        style={styles.card}
        onPress={() => onItemPress(item)}>
        <AnimatableView
          useNativeDriver
          delay={2000}
          animation="pulse"
          easing="ease-out"
          style={styles.photo}>
          <SharedElement id={item.id} style={styles.fullSize}>
            <Image
              style={styles.fullSize}
              resizeMode="contain"
              source={{ uri: item.photo }}
            />
          </SharedElement>
        </AnimatableView>
      </TouchableOpacity>
      <TouchableOpacity
        testID="DeleteItem"
        onPress={deleteUser}
        style={styles.deleteButton}>
        <Icon name="delete" size={30} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const OfflineListScreen = () => {
  const [state, forceUpdate] = useReducer((x) => x + 1, 0)
  const items = useOfflineList(COLLECTIONS.USERS, state)
  const netInfo = useNetInfo()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <CustomListContainer
          items={items}
          style={styles.content}
          renderItem={({ item }) => renderItem(item, forceUpdate)}
        />
      </SafeAreaView>
      <View style={styles.footer}>
        <LottieView
          autoSize
          autoPlay
          loop={false}
          style={styles.netInfo}
          resizeMode="contain"
          source={
            netInfo.isInternetReachable
              ? R.animations.online
              : R.animations.offline
          }
        />
      </View>
    </>
  )
}

OfflineListScreen.navigationOptions = (props: NavigationInjectedProps) => {
  return {
    title: 'Local DB',
    headerLeft: () => <MenuButton {...props} />,
  }
}

export default OfflineListScreen
