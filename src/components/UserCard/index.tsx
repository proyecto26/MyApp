import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { View as AnimatableView } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { SCREENS } from '../../constants'
import { User } from '../../models'
import { NavigationService, UserService } from '../../services'
import styles from './styles'

export function onItemPress(user: User) {
  NavigationService.navigate(SCREENS.DETAILS, { data: user })
}

const UserCard = (user: User) => {
  const [downloaded, setDownload] = useState(true)

  const saveUser = async (data: User) => {
    await UserService.addUser(data)
    setDownload(true)
  }

  useEffect(() => {
    UserService.getUser(user.id).then((u) => setDownload(!!u))
  }, [user.id])

  return (
    <View style={styles.item}>
      <TouchableOpacity
        testID="UserItem"
        key={user.id}
        style={styles.card}
        onPress={() => onItemPress(user)}>
        <AnimatableView
          useNativeDriver
          delay={2000}
          animation="pulse"
          easing="ease-out"
          style={styles.content}>
          <SharedElement id={user.id} style={styles.fullSize}>
            <Image
              style={styles.fullSize}
              resizeMode="contain"
              source={{ uri: user.photo }}
            />
          </SharedElement>
        </AnimatableView>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => saveUser(user)}
        style={styles.downloadButton}
        disabled={downloaded}>
        <Icon
          name={downloaded ? 'cloud-done' : 'cloud-download'}
          size={30}
          color="black"
        />
      </TouchableOpacity>
    </View>
  )
}

export default UserCard
