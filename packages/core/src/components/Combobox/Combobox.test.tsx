import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Combobox from './index'

const defaultProps = {
  filterOptions: ['filter 1', 'filter 2'],
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Combobox {...setupProps} />)
}

describe('ComboboxComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'combobox-component')
    expect(component).toHaveLength(1)
  })
})
