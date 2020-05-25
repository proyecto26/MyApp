const mockedModule = jest.mock('react-native-exception-handler')

mockedModule.setNativeExceptionHandler = jest.fn()

module.exports = mockedModule
