import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Input from './index'

const defaultProps = {
  name: 'name',
  placeholder: 'Type Something...',
  onChange: (e: any) => console.log(e),
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Input {...setupProps} />)
}

describe('InputComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'input-component')
    expect(component).toHaveLength(1)
  })
})
