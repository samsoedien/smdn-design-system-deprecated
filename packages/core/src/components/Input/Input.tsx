import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { TokenColorPaletteGrey10, TokenSpacingSmall, TokenSizeRadiusSmall } from '@smdn/tokens'

const StyledInput = styled.input<IInputProps>`
  width: 100%;
  height: 36px;
  background-color: ${TokenColorPaletteGrey10};
  border: 0;
  border-radius: ${TokenSizeRadiusSmall};
  font-size: 14px;
  text-indent: ${TokenSpacingSmall}
    ${(props) =>
      props.isCondensed &&
      css`
        height: 30px;
      `};
`

export type Type = 'text' | 'password'

export interface IInputProps {
  name: string
  placeholder: string
  type?: Type
  isCondensed?: boolean
  onChange: any
}

const Input: React.FC<IInputProps> = ({ name, type, isCondensed, placeholder, onChange }) => {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      isCondensed={isCondensed}
      onChange={(e: any) => onChange(e)}
      className="smdn-input"
      data-test="input-component"
    />
  )
}

Input.defaultProps = {
  type: 'text',
  isCondensed: false,
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf<Type>(['text', 'password']),
  isCondensed: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
