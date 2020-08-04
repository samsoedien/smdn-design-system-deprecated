import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Alert from './index'

const defaultProps = {
  name: 'John',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Alert {...setupProps}>Hello World</Alert>)
}

describe('AlertComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'alert-component')
    expect(component).toHaveLength(1)
  })
})
