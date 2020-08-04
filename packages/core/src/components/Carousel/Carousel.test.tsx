import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Carousel from './index'

const defaultProps = {
  slides: [],
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Carousel {...setupProps} />)
}

describe('CarouselComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'carousel-component')
    expect(component).toHaveLength(1)
  })
})
