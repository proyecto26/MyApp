import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'
import R from 'res'
import { NavigationService } from '../../services'
import { SCREENS } from '../../constants'

const PlayButton: React.FC = () => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => NavigationService.navigate(SCREENS.PHOTO_LIST)}>
      <LottieView
        style={styles.button}
        autoPlay
        resizeMode="contain"
        source={R.animations.playButton}
      />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 200,
  },
})

export default PlayButton
