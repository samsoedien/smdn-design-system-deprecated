import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Pagination from './index'

const defaultProps = {
  pageCount: 3,
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Pagination {...setupProps} />)
}

describe('PaginationComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'pagination-component')
    expect(component).toHaveLength(1)
  })
})
