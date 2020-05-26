import React from 'react'
import { View, Text, Image, Linking, Button } from 'react-native'
import { NavigationInjectedProps, NavigationScreenProp } from 'react-navigation'
import { SharedElement } from 'react-navigation-shared-element'
import Icon from 'react-native-vector-icons/MaterialIcons'
import R from 'res'

import styles from './styles'
import { User } from '../../models'
import { ParallaxHeader } from '../../containers'
import { BrowserService } from '../../services'

const DetailsScreen = ({ navigation }: NavigationInjectedProps) => {
  const userInfo = navigation.getParam('data') as User
  const { id, email, photo, first, last } = userInfo
  const openUrl = () => photo && BrowserService.openUrl(photo)

  return (
    <View style={styles.container}>
      <ParallaxHeader
        headerMaxHeight={150}
        renderLeft={() => (
          <Icon.Button
            name="close"
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            backgroundColor="transparent"
            underlayColor="transparent"
          />
        )}
        title={`${last}, ${first}`}
        renderRight={() => (
          <Icon.Button
            name="share"
            activeOpacity={0.7}
            onPress={() => Linking.openURL(`mailto:${email}`)}
            backgroundColor="transparent"
            underlayColor="transparent"
          />
        )}
        renderContent={() => (
          <View style={styles.content}>
            <SharedElement id={id}>
              <View style={styles.card}>
                <Image
                  style={styles.photo}
                  resizeMode="contain"
                  source={{ uri: photo }}
                />
              </View>
            </SharedElement>
            <Button onPress={() => openUrl()} title="Open Url" />
            <Text>{R.strings.details.LOREM_IPSUM}</Text>
          </View>
        )}
      />
    </View>
  )
}

DetailsScreen.navigationOptions = { headerShown: false }

// Add the `sharedElements` function to the component, which
// should return a list of shared-elements to transition.
// The `sharedElements` function is called whenever you navigate
// to or from this screen. You can use the provided navigation
// states or trigger or disable animations.
DetailsScreen.sharedElements = (navigation: NavigationScreenProp<any>) => {
  const { id } = navigation.getParam('data', {}) as User
  return [id]
}

export default DetailsScreen
