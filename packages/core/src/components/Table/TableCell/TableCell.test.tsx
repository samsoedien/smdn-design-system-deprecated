import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import TableCell from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<TableCell {...setupProps}>Table Cell</TableCell>)
}

describe('TableCellComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'table-cell-component')
    expect(component.length).toBe(1)
  })
})
