import 'react-native'
import React from 'react'
import { mount, shallow } from 'enzyme'

import ImageViewer, { ImageViewerProps } from '..'

describe('<ImageViewer />', () => {
  const defaultProps: ImageViewerProps = {
    source: { uri: 'something' },
  }

  it('should render', () => {
    const rendered = mount(<ImageViewer {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(shallow(<ImageViewer {...defaultProps} />)).toMatchSnapshot()
  })
})
