import 'react-native'
import 'jest-enzyme'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
import { JSDOM } from 'jsdom'

import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js'
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo)
jest.mock('react-native-safe-area-view')
jest.mock('react-native-animatable')
jest.mock('react-native-parallax-header')
jest.mock('react-native-screens', () => {
  const RealComponent = jest.requireActual('react-native-screens')
  RealComponent.enableScreens = function () {}
  return RealComponent
})
jest.mock('react-native-reanimated', () => {
  const View = require('react-native/Libraries/Components/View/View')
  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
    },
    Easing: {
      in: jest.fn(),
      out: jest.fn(),
      inOut: jest.fn(),
    },
  }
})

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
})

const { window } = jsdom

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.__TEST__ = true
global.fetch = require('jest-fetch-mock')
global.fetchMock = global.fetch
global.document = window.document
global.window = window
global.navigator = {
  userAgent: 'node.js',
}
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0)
}
global.cancelAnimationFrame = function (id) {
  clearTimeout(id)
}
copyProps(window, global)

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({
  adapter: new Adapter(),
})

const realError = console.error
console.error = (...arg) => {
  const message = arg[0]
  if (message.startsWith && message.startsWith('Warning:')) {
    return
  }
  realError(...arg)
}

jest.useFakeTimers()
