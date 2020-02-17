import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import CardHeader from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<CardHeader {...setupProps}>Hello World</CardHeader>)
}

describe('CardHeaderComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'card-header-component')
    expect(component).toHaveLength(1)
  })
})
