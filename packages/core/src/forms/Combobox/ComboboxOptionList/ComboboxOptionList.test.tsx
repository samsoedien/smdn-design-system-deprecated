import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import ComboboxOptionList from './index'

const defaultProps = {
  suggestedFilterOptions: ['filter 1', 'filter 2'],
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<ComboboxOptionList {...setupProps} />)
}

describe('ComboboxOptionListComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'combobox-option-list-component')
    expect(component).toHaveLength(1)
  })
})
