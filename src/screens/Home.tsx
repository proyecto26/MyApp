import React, { Component } from 'react'
import { Transition } from 'react-navigation-fluid-transitions'
import { NavigationScreenProps } from 'react-navigation'
import { StyleSheet, View } from 'react-native'
import { PlayButton } from '../components'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', 'RandomUserMe'),
      headerStyle: {
        backgroundColor: '#593693',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  }

  render() {
    return (
      <PlayButton />
    )
  }
}

export default HomeScreen
