import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'
import { NavigationInjectedProps, withNavigation } from 'react-navigation'
import R from '../res'

class PlayButton extends Component<NavigationInjectedProps> {
  render () {
    const { width, height } = Dimensions.get('screen')
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('userList') }>
          <LottieView
            style={{
              width,
              height,
              maxWidth: 260
            }}
            autoPlay
            resizeMode='center'
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

export default withNavigation(PlayButton)