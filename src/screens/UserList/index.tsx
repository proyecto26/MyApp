import React from 'react'
import { SafeAreaView } from 'react-navigation'
import {
  TouchableHighlight,
  Image,
  ListRenderItem,
  StatusBar,
  View
} from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import LottieView from 'lottie-react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { View as AnimatableView } from 'react-native-animatable'

import { NavigationService } from '../../services'
import { CustomListContainer } from '../../containers'
import { useUserList } from '../../hooks'
import { User } from '../../models'
import styles from './styles'

type Props = {
  users?: User[]
}

const animations = {
  offline: require('../../animations/offline.json'),
  online: require('../../animations/online.json')
}

const UserListScreen: React.FC<Props> = ({ users = [] }) => {

  const items = useUserList(users)
  const netInfo = useNetInfo()

  const onItemPress = (data: User) => {
    NavigationService.navigate('details', { data })
  }

  const renderItem: ListRenderItem<User> = ({ item, index }) => {
    const image = `https://picsum.photos/id/${index}/200/200`
    const details = {
      ...item,
      image
    }
    return (
      <TouchableHighlight
        testID='UserItem'
        key={item.email}
        style={styles.card}
        onPress={() => onItemPress(details)}
      >
        <AnimatableView
          useNativeDriver
          delay={2000}
          animation="pulse"
          easing="ease-out"
          style={styles.photo}
        >
          <SharedElement id={item.email}>
            <Image
              style={{ flex: 1, backgroundColor: 'red' }}
              resizeMode='contain'
              source={{ uri: image }}
            />
          </SharedElement>
        </AnimatableView>
      </TouchableHighlight>
    )
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='black' />
      <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
        <CustomListContainer 
          items={items}
          style={styles.content}
          renderItem={renderItem}
        />
        <View style={styles.buttonBottom}>
          <LottieView
            autoSize
            autoPlay
            loop={false}
            style={styles.netInfo}
            resizeMode='contain'
            source={netInfo.isInternetReachable ? animations.online : animations.offline}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default UserListScreen
