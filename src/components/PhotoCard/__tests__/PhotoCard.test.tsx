import 'react-native'
import React from 'react'
import { mount, shallow } from 'enzyme'

import { NavigationService } from '../../../services'
import { SCREENS } from '../../../constants'
import PhotoCard from '..'

jest.mock('../../../services', () => ({
  PhotoService: {
    getPhoto: jest.fn(() => Promise.resolve('mockedPhoto')),
    addPhoto: jest.fn(() => Promise.resolve()),
  },
  NavigationService: {
    navigate: jest.fn(),
  },
}))

describe('<PhotoCard />', () => {
  const defaultProps = {
    id: '123',
  } as any

  it('should render', () => {
    const rendered = mount(<PhotoCard {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(shallow(<PhotoCard {...defaultProps} />)).toMatchSnapshot()
  })

  describe('When the card is pressed', () => {
    const user = { id: 123 } as any

    it('should redirect to the Details screen', () => {
      const wrapper = mount(<PhotoCard {...user} />)
      wrapper.find({ testID: 'PhotoItem' }).first().prop('onPress')()

      expect(NavigationService.navigate).toHaveBeenCalledWith(
        SCREENS.DETAILS,
        expect.anything(),
      )
    })
  })
})
