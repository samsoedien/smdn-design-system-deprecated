import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import CardFooter from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<CardFooter {...setupProps}>Hello World</CardFooter>)
}

describe('CardFooterComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'card-footer-component')
    expect(component).toHaveLength(1)
  })
})
