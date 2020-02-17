import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Tooltip from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Tooltip {...setupProps}>Hello world</Tooltip>)
}

describe('TooltipComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'tooltip-component')
    expect(component).toHaveLength(1)
  })
})
