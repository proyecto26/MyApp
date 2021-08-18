import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { View as AnimatableView } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { SCREENS } from '../../constants'
import { Photo } from '../../models'
import { NavigationService, PhotoService } from '../../services'
import styles from './styles'

export function onItemPress(photo: Photo) {
  NavigationService.navigate(SCREENS.DETAILS, { data: photo })
}

const PhotoCard = (photo: Photo) => {
  const [downloaded, setDownload] = useState(true)

  const savePhoto = async (data: Photo) => {
    await PhotoService.addPhoto(data)
    setDownload(true)
  }

  useEffect(() => {
    PhotoService.getPhoto(photo.id).then(u => {
      setDownload(!!u)
    })
  }, [photo.id])

  return (
    <View style={styles.item}>
      <TouchableOpacity
        testID="PhotoItem"
        key={photo.id}
        style={styles.card}
        onPress={() => onItemPress(photo)}>
        <AnimatableView
          useNativeDriver
          delay={2000}
          animation="pulse"
          easing="ease-out"
          style={styles.content}>
          <SharedElement id={photo.id} style={styles.fullSize}>
            <Image
              style={styles.fullSize}
              resizeMode="contain"
              source={{ uri: photo.photo }}
            />
          </SharedElement>
        </AnimatableView>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => savePhoto(photo)}
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

export default PhotoCard
