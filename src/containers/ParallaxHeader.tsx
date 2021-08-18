import React, { ReactNode } from 'react'
import {
  View,
  ViewProps,
  TextProps,
  ImageProps,
  ScrollViewProps,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native'
import get from 'lodash/get'
import ReactNativeParallaxHeader from 'react-native-parallax-header'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT

interface Props {
  title?: string
  headerMinHeight?: number
  headerMaxHeight?: number
  extraScrollHeight?: number
  navbarColor?: string
  titleStyle?: TextProps['style']
  backgroundImage?: ImageProps['source']
  backgroundImageScale?: number
  renderNavBar?: () => ReactNode
  renderLeft?: () => ReactNode
  renderBody?: () => ReactNode
  renderRight?: () => ReactNode
  renderContent?: () => ReactNode
  containerStyle?: ViewProps['style']
  innerContainerStyle?: ViewProps['style']
  contentContainerStyle?: ScrollViewProps['contentContainerStyle']
  onScrollBeginDrag?: () => void
  onScrollEndDrag?: () => void
}

const renderNavBar = (
  renderLeft?: () => ReactNode,
  renderBody?: () => ReactNode,
  renderRight?: () => ReactNode,
) => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      {renderLeft && renderLeft()}
      {renderBody && renderBody()}
      {renderRight && renderRight()}
    </View>
  </View>
)

const ParallaxHeader = (props: Props) => {
  return (
    <ReactNativeParallaxHeader
      headerMinHeight={get(props, 'headerMinHeight', HEADER_HEIGHT)}
      headerMaxHeight={get(props, 'headerMaxHeight', 250)}
      extraScrollHeight={get(props, 'extraScrollHeight', 20)}
      navbarColor={get(props, 'navbarColor', '#453AA4')}
      statusBarColor={get(props, 'statusBarColor', '#453AA4')}
      title={get(props, 'title', '')}
      titleStyle={get(props, 'titleStyle', styles.titleStyle)}
      backgroundImage={props.backgroundImage}
      backgroundImageScale={get(props, 'backgroundImageScale', 1)}
      renderNavBar={() =>
        props.renderNavBar ||
        renderNavBar(props.renderLeft, props.renderBody, props.renderRight)
      }
      renderContent={props.renderContent}
      containerStyle={get(props, 'containerStyle', styles.container)}
      contentContainerStyle={get(
        props,
        'contentContainerStyle',
        styles.contentContainer,
      )}
      innerContainerStyle={get(props, 'innerContainerStyle', styles.container)}
      scrollViewProps={{
        onScrollBeginDrag: () =>
          props.onScrollBeginDrag && props.onScrollBeginDrag(),
        onScrollEndDrag: () => props.onScrollEndDrag && props.onScrollEndDrag(),
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default ParallaxHeader
