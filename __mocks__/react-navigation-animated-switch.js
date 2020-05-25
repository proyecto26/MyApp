import { createSwitchNavigator } from 'react-navigation'

const mockedModule = jest.fn((...data) => createSwitchNavigator(...data))

module.exports = mockedModule
