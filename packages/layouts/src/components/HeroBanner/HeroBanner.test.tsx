import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import HeroBanner from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<HeroBanner {...setupProps}>Hello World</HeroBanner>)
}

describe('HeroBannerComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'hero-banner-component')
    expect(component).toHaveLength(1)
  })
})
