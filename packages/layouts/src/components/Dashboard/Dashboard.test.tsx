import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Dashboard from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Dashboard {...setupProps}>Hello World</Dashboard>)
}

describe('DashboardComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'dashboard-component')
    expect(component.length).toBe(1)
  })
})
