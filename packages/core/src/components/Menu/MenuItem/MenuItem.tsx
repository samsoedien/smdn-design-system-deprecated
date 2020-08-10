import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenSpacingSmall, TokenColorPaletteGrey05 } from '@smdn/tokens'

import Link from '../../Link'

const StyledMenuItem = styled.li`
  padding: ${TokenSpacingSmall};
  cursor: pointer;

  &:hover {
    background-color: ${TokenColorPaletteGrey05};
  }
`

export interface IMenuItemProps {
  disabled?: boolean
  children: NonNullable<React.ReactNode>
}

const MenuItem: React.FC<IMenuItemProps> = ({ disabled, children }) => {
  return (
    <StyledMenuItem className="smdn-menu-item" data-test="menu-item-component">
      <Link href="/" disabled={disabled}>
        {children}
      </Link>
    </StyledMenuItem>
  )
}

MenuItem.defaultProps = {
  disabled: false,
}

MenuItem.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default MenuItem
