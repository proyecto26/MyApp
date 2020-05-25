import 'react-native'
import React from 'react'
import { mount, shallow } from 'enzyme'

import Home from '../Home'

describe('<Home />', () => {
  const PARAMS: { [key: string]: string } = {
    title: 'CUSTOM_TITLE',
  }

  const defaultProps = {
    navigation: {
      getParam: (param: string) => {
        return PARAMS[param]
      },
    },
  } as any

  it('should render', () => {
    const rendered = mount(<Home {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = shallow(<Home {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})
