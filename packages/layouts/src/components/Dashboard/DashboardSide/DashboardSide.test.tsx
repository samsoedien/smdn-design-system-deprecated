import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import DashboardSide from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<DashboardSide {...setupProps}>Hello World</DashboardSide>)
}

describe('DashboardSideComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'dashboard-side-component')
    expect(component).toHaveLength(1)
  })
})
