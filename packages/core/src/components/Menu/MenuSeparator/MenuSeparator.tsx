import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMenuSeparator = styled.hr``

export interface IMenuSeparatorProps {}

const MenuSeparator: React.FC<IMenuSeparatorProps> = () => {
  return <StyledMenuSeparator role="separator" className="smdn-menu-separator" data-test="menu-separator-component" />
}

MenuSeparator.propTypes = {}

export default MenuSeparator
