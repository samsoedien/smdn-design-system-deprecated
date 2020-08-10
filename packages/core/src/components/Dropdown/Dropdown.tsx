import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05, TokenColorTextDefault, TokenFontFamilySansSerif } from '@smdn/tokens'
import { Size } from '@smdn/shared'

const StyledDropdown = styled.div<Partial<IDropdownProps>>`
  box-sizing: border-box;
  position: relative;
  font-family: ${TokenFontFamilySansSerif};
`

const StyledDropdownMenu = styled.ul`
  position: relative;
  top: 3px;
  left: 0;
  width: 320px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 6px 6px rgba(0, 0, 0, 0.1);
`
const StyledDropdownItem = styled.li`
  padding: 6px;

  &:hover {
    background-color: ${TokenColorPaletteGrey05};
  }
`

const StyledDropdownLink = styled.a`
  text-decoration: none;
  color: ${TokenColorTextDefault};
  user-select: none;
`

interface IDropdownItem {
  label: string
  href: string
}

export interface IDropdownProps {
  buttonLabel: string
  dropdownItems: IDropdownItem[]
  size?: Size
  children?: React.ReactNode
}

const Dropdown: React.FC<IDropdownProps> = ({ children, buttonLabel, dropdownItems, size }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false)

  return (
    <StyledDropdown
      size={size}
      data-toggle="dropdown"
      aria-expanded="false"
      className="smdn-dropdown"
      data-test="dropdown-component"
    >
      <button type="button" onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
        {buttonLabel}
        <span>{'  v'}</span>
      </button>
      {showDropdownMenu &&
        (children || (
          <StyledDropdownMenu>
            {dropdownItems.map((dropdownItem, index) => (
              <StyledDropdownItem key={index}>
                <StyledDropdownLink href={dropdownItem.href}>{dropdownItem.label}</StyledDropdownLink>
              </StyledDropdownItem>
            ))}
          </StyledDropdownMenu>
        ))}
    </StyledDropdown>
  )
}

Dropdown.defaultProps = {
  size: 'small',
  children: undefined,
}

Dropdown.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  dropdownItems: PropTypes.array.isRequired,
  size: PropTypes.oneOf<Size>(['small']),
  children: PropTypes.node,
}

export default Dropdown
