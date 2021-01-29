import React, { useRef } from 'react'
import {
  StyleSheet,
  ImageProps,
  Dimensions,
  View,
  Image
} from 'react-native'
import ImageZoom, { ImageZoomProps } from 'react-native-image-pan-zoom'

type ImageZoomUsedProps = {
  onMove: ImageZoomProps['onMove'],
  onStartShouldSetPanResponder: ImageZoomProps['onStartShouldSetPanResponder']
}

export type ImageViewerProps = Partial<Exclude<ImageZoomProps, ImageZoomUsedProps>> & {
  source: ImageProps['source'],
  width?: number,
  height?: number,
  onZoom?: (scale: number) => void
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  source,
  width = Dimensions.get('window').width,
  height = Dimensions.get('window').height,
  onZoom,
  ...rest
}) => {
  const scaleValue = useRef(1)
  return (
    <ImageZoom
      cropWidth={Dimensions.get('window').width}
      cropHeight={Dimensions.get('window').height}
      imageWidth={width}
      imageHeight={height}
      minScale={1}
      {...rest}
      onStartShouldSetPanResponder={(e) => {
        return e.nativeEvent.touches.length === 2 || scaleValue.current > 1
      }}
      onMove={({ scale }) => {
        scaleValue.current = scale
        onZoom && onZoom(scale)
      }}>
      <View
        style={styles.container}
        onStartShouldSetResponder={(e) => {
          return e.nativeEvent.touches.length < 2 && scaleValue.current <= 1
        }}>
        <Image
          width={width}
          height={height}
          source={source}
          resizeMode='contain'
          style={styles.container}
        />
      </View>
    </ImageZoom>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1
  }
})

export default ImageViewer
