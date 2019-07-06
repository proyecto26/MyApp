import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { NavigationInjectedProps, SafeAreaView } from 'react-navigation'
import { Transition } from 'react-navigation-fluid-transitions'

import { User } from '../models'

interface Data extends User {
  image: string
}

const DetailsScreen: React.SFC<NavigationInjectedProps> = ({ navigation }) => {

  const { email, image } = navigation.getParam('data', {}) as Data

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
        <Transition appear='top' shared={email}>
          <View style={styles.card}>
            <Image style={{ flex: 1 }} resizeMode='contain' source={{ uri: image }} />
          </View>
        </Transition>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231E32'
  },
  header: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%'
  },
  content: {
    flex: 1,
    backgroundColor: 'white'
  },
  card: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

export default DetailsScreen
