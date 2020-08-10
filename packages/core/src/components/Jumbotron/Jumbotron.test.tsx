import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Jumbotron from './index'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Jumbotron {...setupProps}>Content</Jumbotron>)
}

describe('JumbotronComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'jumbotron-component')
    expect(component).toHaveLength(1)
  })
})
