import 'react-native'
import React from 'react'
import {
  mount,
  shallow
} from 'enzyme'

import Details from '../Details'

describe('<Details />', () => {

  const mockData = {
    image: 'Image'
  }

  const defaultProps: any = {
    navigation: {
      getParam: () => mockData
    }
  }

  it('should render', () => {
    const rendered = mount(<Details {...defaultProps} />)
    expect(rendered).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(shallow(<Details {...defaultProps} />)).toMatchSnapshot()
  })
})
