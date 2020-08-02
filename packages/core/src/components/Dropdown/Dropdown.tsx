import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05 } from '@smdn/tokens'
import { Size } from '@smdn/shared'

const StyledDropdown = styled.div`
  position: relative;
`

const StyledDropdownMenu = styled.ul`
  position: relative;
  top: 3px;
  left: 0;
  width: 320px;
  margin: 0;
  list-style-type: none;
  background-color: #fff;
  border: solid 1px grey;
  border-radius: 3px;
`
const StyledDropdownItem = styled.li`
  padding: 6px;

  &:hover {
    background-color: ${TokenColorPaletteGrey05};
  }
`

const StyledDropdownLink = styled.a`
  text-decoration: none;
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
}

const Dropdown: React.FC<IDropdownProps> = ({ buttonLabel, dropdownItems, size }) => {
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
      {showDropdownMenu && (
        <StyledDropdownMenu>
          {dropdownItems.map((dropdownItem, index) => (
            <StyledDropdownItem key={index}>
              <StyledDropdownLink href={dropdownItem.href}>{dropdownItem.label}</StyledDropdownLink>
            </StyledDropdownItem>
          ))}
        </StyledDropdownMenu>
      )}
    </StyledDropdown>
  )
}

Dropdown.defaultProps = {
  size: 'small',
}

Dropdown.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  dropdownItems: PropTypes.array.isRequired,
  size: PropTypes.oneOf<Size>(['small']),
}

export default Dropdown
