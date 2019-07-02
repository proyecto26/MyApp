import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { NavigationInjectedProps, SafeAreaView } from 'react-navigation'
import { Transition } from 'react-navigation-fluid-transitions'

import { User } from '../models'

const DetailsScreen: React.SFC<NavigationInjectedProps> = ({ navigation }) => {

  const { email } = navigation.getParam('item', {}) as User

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={[StyleSheet.absoluteFill, styles.container]}>
      <View style={styles.header}>
        <Button
          onPress={() => navigation.goBack()}
          title="Back"
          color="#841584"
          accessibilityLabel="Go back"
        />
        <Text>Usuario</Text>
      </View>
      <View style={styles.content}>
        <Transition appear='top' shared='item'>
          <View style={styles.card}>
            <Text>{ email }</Text>
          </View>
        </Transition>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#593693'
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%'
  },
  content: {
    margin: 10
  },
  card: {
    flex: 1,
    width: '100%',
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: '#ECECEC',
    borderColor: '#CCC',
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: '#EEE',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    flexDirection: 'row',
    elevation: 3,
  }
})

export default DetailsScreen
