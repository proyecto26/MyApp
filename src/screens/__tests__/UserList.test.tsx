import React from 'react'
import {
  mount,
  shallow
} from 'enzyme'

import UserList from '../UserList'
import { User } from '../../models'
import { NavigationService } from '../../services'
import { useUserList } from '../../hooks'

jest.mock('../../hooks', () => ({
  useUserList: jest.fn((list: any) => list)
}))

jest.mock('../../services', () => ({
  NavigationService: {
    navigate: jest.fn()
  }
}))

describe('<UserList />', () => {

  const users: User[] = [
    { first: 'Juan', last: 'Nicholls', address: 'street 26', email: 'jdnichollsc@hotmail.com' }
  ]
  const defaultProps = {
    initialList: users
  }

  it('should render', () => {
    const rendered = mount(<UserList {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(shallow(<UserList {...defaultProps} />)).toMatchSnapshot()
  })

  describe('When an item is pressed', () => {

    it('should redirect to the Details screen', () => {
      const wrapper = mount(<UserList {...defaultProps} />)
      expect(useUserList).toHaveBeenCalled()

      wrapper.find({ testID: 'UserItem' }).first().props().onPress()
      expect(NavigationService.navigate).toHaveBeenCalled()
    })
  })
})
