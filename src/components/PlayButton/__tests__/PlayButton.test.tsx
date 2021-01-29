import 'react-native'
import React from 'react'
import { mount, shallow } from 'enzyme'

import PlayButton from '..'

describe('<PlayButton />', () => {
  const defaultProps = {}

  it('should render', () => {
    const rendered = mount(<PlayButton {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(shallow(<PlayButton {...defaultProps} />)).toMatchSnapshot()
  })
})
