import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Avatar from './index'

const defaultProps = {
  name: 'John',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Avatar {...setupProps}>Hello World</Avatar>)
}

describe('AvatarComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'avatar-component')
    expect(component).toHaveLength(1)
  })
})
