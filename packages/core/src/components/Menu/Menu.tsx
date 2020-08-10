import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenFontFamilySansSerif } from '@smdn/tokens'

const StyledMenu = styled.ul`
  font-family: ${TokenFontFamilySansSerif};
  list-style: none;
  margin: 0;
  padding: 0;
`

export interface IMenuProps {}

const Menu: React.FC<IMenuProps> = ({ children }) => {
  return (
    <StyledMenu className="smdn-menu" data-test="menu-component">
      {children}
    </StyledMenu>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Menu
