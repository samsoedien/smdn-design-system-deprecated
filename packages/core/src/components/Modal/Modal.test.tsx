import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import Modal from './index'

const defaultProps = {
  heading: 'modal heading',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Modal {...setupProps}>Modal Content</Modal>)
}

describe('ModalComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'modal-component')
    expect(component).toHaveLength(1)
  })
})
