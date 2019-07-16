import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'
import { NavigationService } from '../services'
import R from 'res'

class PlayButton extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => NavigationService.navigate('userList') }>
          <LottieView
            style={{
              width: 200,
              height: 200
            }}
            autoPlay
            resizeMode='contain'
            source={R.animations.playButton}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default PlayButton