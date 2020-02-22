import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import DashboardSideHeader from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<DashboardSideHeader {...setupProps}>Hello World</DashboardSideHeader>)
}

describe('DashboardSideHeaderComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'dashboard-side-header-component')
    expect(component).toHaveLength(1)
  })
})
