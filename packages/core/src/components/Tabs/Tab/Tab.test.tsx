import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Tab from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Tab {...setupProps}>Hello world</Tab>)
}

describe('TabComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'tab-component')
    expect(component).toHaveLength(1)
  })
})
