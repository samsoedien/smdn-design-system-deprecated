import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Blockquote from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Blockquote {...setupProps}>Blockquote Label</Blockquote>)
}

describe('BlockquoteComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'blockquote-component')
    expect(component).toHaveLength(1)
  })
})
