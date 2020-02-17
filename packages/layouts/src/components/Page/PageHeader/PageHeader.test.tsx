import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import PageHeader from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<PageHeader {...setupProps}>Hello World</PageHeader>)
}

describe('PageHeaderComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'page-header-component')
    expect(component.length).toBe(1)
  })
})
