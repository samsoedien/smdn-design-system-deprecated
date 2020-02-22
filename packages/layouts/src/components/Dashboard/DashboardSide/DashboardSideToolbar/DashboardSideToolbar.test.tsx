import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import DashboardSideToolbar from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<DashboardSideToolbar {...setupProps}>Hello World</DashboardSideToolbar>)
}

describe('DashboardSideToolbarComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'dashboard-side-toolbar-component')
    expect(component).toHaveLength(1)
  })
})
