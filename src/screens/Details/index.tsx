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

interface Data extends User {
  image: string
  email: string
  first: string
  last: string
}

const DetailsScreen = (
  { data, navigation }: NavigationInjectedProps & { data: Data }
) => {
  const { email, image, first, last } = data

  const openUrl = () => BrowserService.openUrl(image)

  return (
    <View style={styles.container}>
      <ParallaxHeader
        headerMaxHeight={150}
        renderLeft={() => 
          <Icon.Button
            name='close'
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            backgroundColor='transparent'
            underlayColor='transparent'
          />
        }
        title={`${last}, ${first}`}
        renderRight={() => 
          <Icon.Button
            name='share'
            activeOpacity={0.7}
            onPress={() => Linking.openURL(`mailto:${email}`)}
            backgroundColor='transparent'
            underlayColor='transparent'
          />
        }
        renderContent={() => (
          <View style={styles.content}>
            <SharedElement id={email}>
              <View style={styles.card}>
                <Image style={{ height: 260 }} resizeMode='contain' source={{ uri: image }} />
              </View>
            </SharedElement>
            <Button onPress={() => openUrl()} title='Open Url'></Button>
            <Text>{ R.strings.details.LOREM_IPSUM }</Text>
          </View>
        )}
      />
    </View>
  )
}

// Add the `sharedElements` function to the component, which
// should return a list of shared-elements to transition.
// The `sharedElements` function is called whenever you navigate
// to or from this screen. You can use the provided navigation
// states or trigger or disable animations.
DetailsScreen.sharedElements = (navigation: NavigationScreenProp<any>) => {
  const { email } = navigation.getParam('data', {});
  return [ email ];
};

export default DetailsScreen
