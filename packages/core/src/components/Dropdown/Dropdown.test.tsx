import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Dropdown from './index'

const defaultProps = {
  buttonLabel: 'dropdown',
  dropdownItems: [
    {
      label: 'action',
      href: '/action',
    },
  ],
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Dropdown {...setupProps} />)
}

describe('DropdownComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'dropdown-component')
    expect(component).toHaveLength(1)
  })
})
