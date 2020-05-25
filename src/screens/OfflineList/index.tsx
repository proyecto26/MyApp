import React from 'react'
import { SafeAreaView, NavigationInjectedProps } from 'react-navigation'
import {
  TouchableOpacity,
  Image,
  ListRenderItem,
  StatusBar,
  View,
} from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import LottieView from 'lottie-react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { View as AnimatableView } from 'react-native-animatable'

import { NavigationService } from '../../services'
import { CustomListContainer } from '../../containers'
import { useOfflineList } from '../../hooks'
import { User } from '../../models'
import { SCREENS } from '../../constants'
import { MenuButton } from '../../components'
import styles from './styles'

const animations = {
  offline: require('../../animations/offline.json'),
  online: require('../../animations/online.json'),
}

const OfflineListScreen = () => {
  const items = useOfflineList('users')
  const netInfo = useNetInfo()

  const onItemPress = (data: User) => {
    NavigationService.navigate(SCREENS.DETAILS, { data })
  }

  const renderItem: ListRenderItem<User> = ({ item }) => {
    return (
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
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <CustomListContainer
          items={items}
          style={styles.content}
          renderItem={renderItem}
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
            netInfo.isInternetReachable ? animations.online : animations.offline
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
