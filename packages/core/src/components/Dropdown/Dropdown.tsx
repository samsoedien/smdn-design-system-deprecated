import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDropdown = styled.div``

export interface IDropdownProps {}

const Dropdown: React.FC<IDropdownProps> = () => {
  return <StyledDropdown className="smdn-dropdown" data-test="dropdown-component" />
}

Dropdown.propTypes = {}

export default Dropdown
