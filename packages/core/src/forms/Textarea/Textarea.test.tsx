import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Textarea from './index'

const defaultProps = {
  name: 'name',
  onChange: (e: any) => console.log(e),
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Textarea {...setupProps}>Hello world</Textarea>)
}

describe('TextareaComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'textarea-component')
    expect(component).toHaveLength(1)
  })
})
