import React from 'react'
import { mount, shallow } from 'enzyme'
import UserList from '../UserList'

jest.mock('../../hooks', () => ({
  useUserList: jest.fn(() => []),
}))

describe('<UserList />', () => {
  const defaultProps = {
    navigation: jest.fn(),
  } as any

  it('should render', () => {
    const rendered = mount(<UserList {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(shallow(<UserList {...defaultProps} />)).toMatchSnapshot()
  })
})
