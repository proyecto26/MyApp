import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import LottieView from 'lottie-react-native'
import RNRestart from 'react-native-restart'
import { View as AnimatableView } from 'react-native-animatable'
import R from 'res'

const ErrorContainer = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.header}
        autoPlay
        resizeMode="cover"
        source={R.animations.error}
      />
      <Text style={styles.oops}>Oops</Text>
      <AnimatableView
        style={styles.button}
        iterationDelay={3000}
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite">
        <Button
          testID="restart"
          color="white"
          title="Restart"
          onPress={() => RNRestart.Restart()}
        />
      </AnimatableView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 260,
  },
  oops: {
    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    maxWidth: 200,
    marginTop: 30,
  },
})

export default ErrorContainer
