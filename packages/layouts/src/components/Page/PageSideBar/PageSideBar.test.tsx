import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import PageSideBar from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<PageSideBar {...setupProps}>PageSideBar</PageSideBar>)
}

describe('PageSideBarComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'page-side-bar-component')
    expect(component).toHaveLength(1)
  })
})
