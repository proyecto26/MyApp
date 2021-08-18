import React, { useRef, useCallback } from 'react'
import { StyleSheet, ImageProps, Dimensions, View, Image } from 'react-native'
import ImageZoom, {
  ImageZoomProps,
  IOnClick,
} from 'react-native-image-pan-zoom'

type ImageZoomWithoutUsedProps = Omit<
  ImageZoomProps,
  keyof {
    cropWidth: ImageZoomProps['cropWidth']
    cropHeight: ImageZoomProps['cropHeight']
    imageWidth: ImageZoomProps['imageWidth']
    imageHeight: ImageZoomProps['imageHeight']
    minScale: ImageZoomProps['minScale']
    onMove: ImageZoomProps['onMove']
    onStartShouldSetPanResponder: ImageZoomProps['onStartShouldSetPanResponder']
  }
>

export type ImageViewerProps = ImageZoomWithoutUsedProps & {
  source: ImageProps['source']
  width?: number
  height?: number
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
  const imageZoomRef = useRef<ImageZoom>(null)
  const handlDoubleClick = useCallback(
    ({ pageX, pageY }: IOnClick) => {
      if (imageZoomRef.current && scaleValue.current === 1) {
        imageZoomRef.current.centerOn({
          x: pageX,
          y: pageY,
          scale: 3,
          duration: 300,
        })
      }
    },
    [scaleValue, imageZoomRef],
  )
  return (
    <ImageZoom
      ref={imageZoomRef}
      cropWidth={Dimensions.get('window').width}
      cropHeight={Dimensions.get('window').height}
      imageWidth={width}
      imageHeight={height}
      minScale={1}
      maxScale={7}
      enableDoubleClickZoom
      enableCenterFocus={false}
      pinchToZoom
      useNativeDriver
      panToMove
      enableSwipeDown={false}
      {...rest}
      onMove={({ scale }) => {
        scaleValue.current = scale
        onZoom && onZoom(scale)
      }}
      onDoubleClick={e => handlDoubleClick(e)}
      onStartShouldSetPanResponder={e => {
        return e.nativeEvent.touches.length === 2 || scaleValue.current > 1
      }}>
      <View
        style={styles.container}
        onStartShouldSetResponder={e => {
          return e.nativeEvent.touches.length < 2 && scaleValue.current <= 1
        }}>
        <Image
          width={width}
          height={height}
          source={source}
          resizeMode="contain"
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
    flex: 1,
  },
})

export default ImageViewer
