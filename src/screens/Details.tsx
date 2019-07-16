import React from 'react'
import { StyleSheet, View, Text, Image, Linking } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Transition } from 'react-navigation-fluid-transitions'
// import InAppBrowser from 'react-native-inappbrowser-reborn'
import Icon from 'react-native-vector-icons/MaterialIcons'
import R from 'res'
import { User } from '../models'
import { ParallaxHeader } from '../containers'

interface Data extends User {
  image: string
}

const DetailsScreen: React.SFC<NavigationInjectedProps> = ({ navigation }) => {

  const { email, image, first, last } = navigation.getParam('data', {}) as Data

  return (
    <View style={styles.container}>
      <ParallaxHeader
        headerMaxHeight={150}
        renderLeft={() => 
          <Icon.Button
            name='close'
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            backgroundColor='transparent'
            underlayColor='transparent'
          />
        }
        title={`${last}, ${first}`}
        renderRight={() => 
          <Icon.Button
            name='share'
            activeOpacity={0.7}
            onPress={() => Linking.openURL(`mailto:${email}`)}
            backgroundColor='transparent'
            underlayColor='transparent'
          />
        }
        renderContent={() => (
          <View style={styles.content}>
            <Transition appear='top' shared={email}>
              <View style={styles.card}>
                <Image style={{ height: 260 }} resizeMode='contain' source={{ uri: image }} />
              </View>
            </Transition>
            {/* <Button onPress={() => InAppBrowser.open('https://github.com')} title='Open Url'></Button> */}
            <Text>{ R.strings.details.LOREM_IPSUM }</Text>
          </View>
        )}
      />
    </View>
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
    backgroundColor: 'white',
    padding: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

export default DetailsScreen
