import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Modal,
  FlatList,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import { Header, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ImageViewer, { ImageViewerProps } from '../ImageViewer'

type ImageProps = {
  imageKeyName?: string
  imageSourceName?: string
}

export type ImageGalleryProps = ImageProps & {
  images: Array<{ [key: string]: string | number }>,
  isVisible: boolean,
  onClosePress: () => void,
  viewerProps?: Partial<ImageViewerProps>,
  renderFooter?: (bottom: number) => JSX.Element
}

const ImageGallery = ({
  isVisible,
  images,
  viewerProps = {},
  onClosePress,
  renderFooter,
  imageKeyName = 'key',
  imageSourceName = 'src'
}: ImageGalleryProps) => {
  const [index, setIndex] = useState(0)
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
  return (
    <Modal
      visible={isVisible}
      animationType='slide'
      supportedOrientations={['landscape', 'portrait']}
    >
      <Header
        leftComponent={<Button
          accessibilityLabel='imageGalleryClose'
          accessible
          testID='imageGalleryCloseID'
          icon={<Icon
            name='arrow-back-ios'
            color='#000'
            size={26}
          />}
          onPress={onClosePress}
        />}
        centerComponent={{
          text: `${index + 1} of ${images.length}`,
          style: styles.title
        }}
        containerStyle={[styles.header, { height: top + 50, paddingTop: top }]}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onScrollEnd}
            data={images}
            renderItem={({ item }) => (
              <ImageViewer
                {...viewerProps}
                source={{ uri: String(item[imageSourceName]) }}
              />
            )}
            keyExtractor={(item, index) => String(item[imageKeyName] || index)}
            contentContainerStyle={styles.viewer}
          />
        </View>
        {renderFooter && (
          <View style={styles.footer}>
            {renderFooter(bottom)}
          </View>
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  header: {
    justifyContent: 'space-around'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    textAlignVertical: 'center'
  },
  content: {
    flex: 1,
    flexGrow: 1
  },
  viewer: {
    alignItems: 'center'
  },
  footer: {
    flex: 0
  }
})

export default ImageGallery
