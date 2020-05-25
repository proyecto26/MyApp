import React, { Component } from 'react'
import { Transition } from 'react-native-reanimated'

class ScreenTransition extends Component {
  render() {
    return (
      <Transition.Together>
        <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    )
  }
}

export default ScreenTransition
