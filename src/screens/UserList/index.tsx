import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { StatusBar, View } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import LottieView from 'lottie-react-native'
import R from 'res'

import { MenuButton, UserCard } from '../../components'
import { CustomListContainer } from '../../containers'
import { useUserList } from '../../hooks'
import styles from './styles'

const UserListScreen = () => {
  const items = useUserList()
  const netInfo = useNetInfo()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'always' }}>
        <CustomListContainer
          items={items}
          style={styles.content}
          renderItem={({ item }) => <UserCard {...item} />}
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

UserListScreen.navigationOptions = (props: any) => {
  return {
    title: 'Users',
    headerLeft: () => <MenuButton {...props} />,
  }
}

export default UserListScreen
