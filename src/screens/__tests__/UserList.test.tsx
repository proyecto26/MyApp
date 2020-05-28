import React from 'react'
import { mount, shallow } from 'enzyme'
import PhotoList from '../PhotoList'

jest.mock('../../hooks', () => ({
  usePhotoList: jest.fn(() => []),
}))

describe('<PhotoList />', () => {
  const defaultProps = {
    navigation: jest.fn(),
  } as any

  it('should render', () => {
    const rendered = mount(<PhotoList {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(shallow(<PhotoList {...defaultProps} />)).toMatchSnapshot()
  })
})
