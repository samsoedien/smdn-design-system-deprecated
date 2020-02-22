import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import DashboardNavigation from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<DashboardNavigation {...setupProps}>Hello World</DashboardNavigation>)
}

describe('DashboardNavigationComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'dashboard-navigation-component')
    expect(component).toHaveLength(1)
  })
})
