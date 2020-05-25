import 'react-native'
import React from 'react'
import { mount, shallow } from 'enzyme'

import UserCard from '../UserCard'
import { NavigationService } from '../../services'

jest.mock('../../services', () => ({
  UserService: {
    getUser: jest.fn(() => Promise.resolve('mockedUser')),
    addUser: jest.fn(() => Promise.resolve()),
  },
  NavigationService: {
    navigate: jest.fn(),
  },
}))

describe('<UserCard />', () => {
  const defaultProps = {
    id: '123',
  } as any

  it('should render', () => {
    const rendered = mount(<UserCard {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(shallow(<UserCard {...defaultProps} />)).toMatchSnapshot()
  })

  describe('When the card is pressed', () => {
    const user = { id: 123 } as any

    it('should redirect to the Details screen', () => {
      const wrapper = mount(<UserCard {...user} />)
      wrapper.find({ testID: 'UserItem' }).first().prop('onPress')()

      expect(NavigationService.navigate).toHaveBeenCalled()
    })
  })
})
