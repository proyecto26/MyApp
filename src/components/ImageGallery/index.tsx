import React, { useState, useEffect, useRef, ReactNode } from 'react'
import {
  StyleSheet,
  Modal,
  FlatList,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'
import { Header, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ImageViewer, { ImageViewerProps } from '../ImageViewer'

type ImageProps = {
  imageKeyName?: string
  imageSourceName?: string
}

type Image = Record<string, string | number>

export type ImageGalleryProps = ImageProps & {
  images: Array<Image>
  isVisible: boolean
  onClosePress: () => void
  viewerProps?: Partial<ImageViewerProps>
  renderFooter?: (bottom: number) => ReactNode
}

const MAX_SCALE_TO_ENABLE_SCROLL = 1

const ImageGallery = ({
  isVisible,
  images,
  viewerProps = {},
  onClosePress,
  renderFooter,
  imageKeyName = 'key',
  imageSourceName = 'src',
}: ImageGalleryProps) => {
  const listRef = useRef<FlatList<Image>>(null)
  const [index, setIndex] = useState(0)
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const { top, bottom } = useSafeAreaInsets()
  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = e.nativeEvent
    setIndex(Math.floor(contentOffset.x / layoutMeasurement.width))
  }
  useEffect(() => {
    if (!isVisible) {
      setIndex(0)
    }
  }, [isVisible])

  useEffect(() => {
    setScrollEnabled(true)
  }, [images])
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      supportedOrientations={['landscape', 'portrait']}>
      <Header
        leftComponent={
          <Button
            accessibilityLabel="imageGalleryClose"
            accessible
            testID="imageGalleryCloseID"
            icon={<Icon name="arrow-back-ios" color="#000" size={26} />}
            onPress={onClosePress}
          />
        }
        centerComponent={{
          text: `${index + 1} of ${images.length}`,
          style: styles.title,
        }}
        containerStyle={[styles.header, { height: top + 50, paddingTop: top }]}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList
            ref={listRef}
            horizontal
            pagingEnabled
            scrollEnabled={scrollEnabled}
            scrollEventThrottle={200}
            nestedScrollEnabled={scrollEnabled}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onScrollEnd}
            data={images}
            renderItem={({ item, index: indexImage }) => (
              <ImageViewer
                {...viewerProps}
                source={{ uri: String(item[imageSourceName]) }}
                onZoom={scale => {
                  const enableScroll = scale <= MAX_SCALE_TO_ENABLE_SCROLL
                  if (!enableScroll && listRef.current) {
                    listRef.current.scrollToIndex({ index: indexImage })
                  }
                  setScrollEnabled(enableScroll)
                }}
              />
            )}
            keyExtractor={(item, i) => String(item[imageKeyName] || i)}
            contentContainerStyle={styles.viewer}
            onStartShouldSetResponder={e => {
              return e.nativeEvent.touches.length === 1 && scrollEnabled
            }}
            onMoveShouldSetResponder={e => {
              return e.nativeEvent.touches.length === 1 && scrollEnabled
            }}
          />
        </View>
        {renderFooter && (
          <View style={styles.footer}>{renderFooter(bottom)}</View>
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  header: {
    justifyContent: 'space-around',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    textAlignVertical: 'center',
  },
  content: {
    flex: 1,
    flexGrow: 1,
  },
  viewer: {
    alignItems: 'center',
  },
  footer: {
    flex: 0,
  },
})

export default ImageGallery
