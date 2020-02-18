import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Breadcrumbs from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Breadcrumbs {...setupProps} />)
}

describe('BreadcrumbsComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'breadcrumbs-component')
    expect(component).toHaveLength(1)
  })
})
