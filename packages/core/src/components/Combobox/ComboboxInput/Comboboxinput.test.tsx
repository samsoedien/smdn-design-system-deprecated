import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import ComboboxInput from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<ComboboxInput {...setupProps} />)
}

describe('ComboboxInputComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'combobox-input-component')
    expect(component).toHaveLength(1)
  })
})
