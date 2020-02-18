import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Sparkline from './index'

const defaultProps = {
  heading: 'summary',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Sparkline {...setupProps} />)
}

describe('SparklineComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'sparkline-component')
    expect(component).toHaveLength(1)
  })
})
