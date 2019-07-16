import React, { Component, Fragment } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import {
  NavigationScreenConfig,
  NavigationScreenOptions,
} from 'react-navigation'
import R from 'res'
import { PlayButton } from '../components'

class HomeScreen extends Component {
  static navigationOptions: NavigationScreenConfig<NavigationScreenOptions> = ({ navigation }) => ({
    title: navigation.getParam('title', 'My Awesome App'),
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackground: (
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['#6f5ce4', '#1885ef', '#8ac5f6']}
        style={StyleSheet.absoluteFill}
      >
      </LinearGradient>
    )
  })

  render() {
    return (
      <Fragment>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <ImageBackground source={R.images.background} style={StyleSheet.absoluteFill}>
          <PlayButton />
        </ImageBackground>
      </Fragment>
    )
  }
}

export default HomeScreen
