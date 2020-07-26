import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05, TokenColorPaletteGrey10, TokenColorTextDefault } from '@smdn/tokens'

const StyledDropdown = styled.div`
  width: 300px;
  position: relative;
`

const StyledSelect = styled.select`
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5em 4em 0.5em 1em;
  background-color: ${TokenColorPaletteGrey05};
  color: ${TokenColorTextDefault};
  border: none;
  border-radius: 3px;
  appearance: none;

  &:focus {
    outline: 3px solid lightblue;
  }
`

const StyledCustomArrow = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${TokenColorPaletteGrey10};
  border-radius: 0 3px 3px 0;
  height: 100%;
  width: 2rem;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    border-left: 0.4em solid transparent;
    border-right: 0.4em solid transparent;
    border-bottom: 0.4em solid ${TokenColorTextDefault};
    top: 40%;
  }

  &::after {
    border-left: 0.4em solid transparent;
    border-right: 0.4em solid transparent;
    border-top: 0.4em solid ${TokenColorTextDefault};
    top: 60%;
  }
`

interface IOption {
  label: string
  value: string
}

export interface ISelectProps {
  options: IOption[]
}

const Select: React.FC<ISelectProps> = ({ options }) => {
  return (
    <>
      <StyledDropdown className="smdn-select" data-test="select-component">
        <StyledSelect>
          {options.map((option: IOption, index: number) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <StyledCustomArrow />
      </StyledDropdown>
      <div />
    </>
  )
}

Select.propTypes = {
  // options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired,
  options: PropTypes.any.isRequired,
}

export default Select
