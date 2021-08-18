const ReactNativeSafeAreaContext = jest.mock('react-native-safe-area-context')

const insets = {
  top: 0,
}
export const useSafeArea = jest.fn(() => insets)
export const SafeAreaView = ({ children }) => children

export const useSafeAreaInsets = useSafeArea

ReactNativeSafeAreaContext.useSafeArea = useSafeArea
ReactNativeSafeAreaContext.SafeAreaView = SafeAreaView
ReactNativeSafeAreaContext.useSafeAreaInsets = useSafeAreaInsets

export default ReactNativeSafeAreaContext
