import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import DashboardMain from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<DashboardMain {...setupProps}>Hello World</DashboardMain>)
}

describe('DashboardMainComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'dashboard-main-component')
    expect(component).toHaveLength(1)
  })
})
