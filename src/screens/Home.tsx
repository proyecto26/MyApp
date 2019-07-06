import React, { Component, Fragment } from 'react'
import { NavigationScreenConfig, NavigationScreenOptions } from 'react-navigation'
import { PlayButton } from '../components'

class HomeScreen extends Component {
  static navigationOptions: NavigationScreenConfig<NavigationScreenOptions> = ({ navigation }) => ({
    title: navigation.getParam('title', 'RandomUserMe'),
    headerStyle: {
      backgroundColor: '#593693',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  })

  render() {
    return (
      <Fragment>
        <PlayButton />
      </Fragment>
    )
  }
}

export default HomeScreen
