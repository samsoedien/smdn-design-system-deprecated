import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import PageFooter from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<PageFooter {...setupProps}>Hello World</PageFooter>)
}

describe('PageFooterComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'page-footer-component')
    expect(component.length).toBe(1)
  })
})
