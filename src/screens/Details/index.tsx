import React, { useState, useEffect } from 'react'
import {
  View,
  ScrollView,
  Text,
  Image,
  Linking,
  Button,
  TouchableOpacity,
} from 'react-native'
import { NavigationInjectedProps, NavigationScreenProp } from 'react-navigation'
import { SharedElement } from 'react-navigation-shared-element'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Avatar } from 'react-native-elements'
import range from 'lodash/range'
import R from 'res'

import styles from './styles'
import { Photo } from '../../models'
import { ParallaxHeader } from '../../containers'
import { BrowserService } from '../../services'
import { ImageGallery } from '../../components'

type GalleryImage = {
  id: string
  src: string
}

const DetailsScreen = ({ navigation }: NavigationInjectedProps) => {
  const [enableGallery, setEnableGallery] = useState(false)
  const [images, setImages] = useState([] as Array<GalleryImage>)
  const photoInfo = navigation.getParam('data') as Photo
  const { id, email, photo, first, last } = photoInfo
  const openUrl = () => photo && BrowserService.openUrl(photo)

  const loadImages = () => {
    const baseIndex = Math.floor(Math.random() * 100)
    const newImages = [...new Array(5).keys()].map(i => {
      return {
        id: `image_${i}`,
        src: `https://picsum.photos/id/${i + baseIndex}/400/400`,
      }
    })
    setImages(newImages)
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <>
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
                <TouchableOpacity onPress={() => setEnableGallery(true)}>
                  <View style={styles.card}>
                    <Image
                      style={styles.photo}
                      resizeMode="contain"
                      source={{ uri: photo }}
                    />
                  </View>
                </TouchableOpacity>
              </SharedElement>
              <Button onPress={openUrl} title="Open Url" />
              <Text>{R.strings.details.LOREM_IPSUM}</Text>
            </View>
          )}
        />
      </View>
      <ImageGallery
        images={images}
        isVisible={enableGallery}
        onClosePress={() => setEnableGallery(false)}
        renderFooter={() => (
          <ScrollView
            horizontal
            contentContainerStyle={styles.imageGalleryFooter}>
            {range(0, 10).map((_, i) => (
              <Avatar
                key={`avatar_${i}`}
                onPress={loadImages}
                rounded
                icon={{ name: 'home', color: '#000' }}
                size="large"
                activeOpacity={0.7}
                containerStyle={styles.imageGalleryButtonContainer}
                overlayContainerStyle={styles.imageGalleryButton}
              />
            ))}
          </ScrollView>
        )}
      />
    </>
  )
}

DetailsScreen.navigationOptions = { headerShown: false }

// Add the `sharedElements` function to the component, which
// should return a list of shared-elements to transition.
// The `sharedElements` function is called whenever you navigate
// to or from this screen. You can use the provided navigation
// states or trigger or disable animations.
DetailsScreen.sharedElements = (navigation: NavigationScreenProp<any>) => {
  const { id } = navigation.getParam('data', {}) as Photo
  return [id]
}

export default DetailsScreen
