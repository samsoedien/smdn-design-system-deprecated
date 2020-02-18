import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import TableBody from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<TableBody {...setupProps}>Table Body</TableBody>)
}

describe('TableBodyComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'table-body-component')
    expect(component).toHaveLength(1)
  })
})
