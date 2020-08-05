import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '@smdn/shared'
import SearchBar from './index'

const defaultProps = {
  handleSubmitCallback: (searchValue) => console.log(searchValue),
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<SearchBar {...setupProps} />)
}

describe('SearchBarComponent', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'search-bar-component')
    expect(component).toHaveLength(1)
  })
})
