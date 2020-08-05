import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Range from './index'

const defaultProps = {
  label: 'range label',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Range {...setupProps} />)
}

describe('RangeComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'range-component')
    expect(component).toHaveLength(1)
  })
})
