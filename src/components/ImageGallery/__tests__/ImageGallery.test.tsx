import 'react-native'
import React from 'react'
import { mount, shallow } from 'enzyme'

import ImageGallery, { ImageGalleryProps } from '..'

const makeShallowWrapper = (props: ImageGalleryProps) =>
  shallow(<ImageGallery {...props} />)

const makeMountWrapper = (props: ImageGalleryProps) =>
  mount(<ImageGallery {...props} />)

describe('<ImageGallery />', () => {
  const defaultProps: ImageGalleryProps = {
    isVisible: true,
    images: [
      { id: 1, src: '123' },
      { id: 2, src: '123' },
    ],
    onClosePress: jest.fn(),
  }

  it('should render', () => {
    const rendered = makeMountWrapper(defaultProps)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(makeShallowWrapper(defaultProps)).toMatchSnapshot()
  })

  describe('When the close button is pressed', () => {
    it('should call onClosePress function', () => {
      const wrapper = makeMountWrapper(defaultProps)
      wrapper.find({ testID: 'imageGalleryCloseID' }).first().prop('onPress')()

      expect(defaultProps.onClosePress).toHaveBeenCalled()
    })
  })
})
