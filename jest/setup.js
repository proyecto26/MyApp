import 'react-native'
import 'jest-enzyme'
import 'react-native-mock-render/mock'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
import { JSDOM } from 'jsdom'
const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window: { document } } = jsdom

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.fetch = require('jest-fetch-mock')
global.fetchMock = global.fetch
global.document = document
global.window = document.defaultView
global.navigator = {
  userAgent: 'node.js'
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
Enzyme.configure({ adapter: new Adapter() })

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

const realError = console.error
console.error = (...x) => {
  if (x[0].startsWith('Warning:')) {
    return;
  }
  realError(...x)
}