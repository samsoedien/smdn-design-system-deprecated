import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import DashboardFooter from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<DashboardFooter {...setupProps}>Hello World</DashboardFooter>)
}

describe('DashboardFooterComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'dashboard-footer-component')
    expect(component).toHaveLength(1)
  })
})
