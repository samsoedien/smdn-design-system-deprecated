import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey10, TokenSpacingXSmall, TokenSizeRadiusSmall } from '@smdn/tokens'

export interface ITextareaProps {
  name: string
  rows?: number
  cols?: number
  autofocus?: boolean
  disabled?: boolean
  onChange: any
  children: React.ReactNode
}

const StyledTextarea = styled.textarea<ITextareaProps>`
  width: 100%;
  background-color: ${TokenColorPaletteGrey10};
  border: none;
  border-radius: ${TokenSizeRadiusSmall};
  text-indent: ${TokenSpacingXSmall};
`

const Textarea: React.FC<ITextareaProps> = ({ name, rows, cols, autofocus, disabled, onChange, children }) => {
  return (
    <StyledTextarea
      name={name}
      rows={rows}
      cols={cols}
      autofocus={autofocus}
      disabled={disabled}
      onChange={(e: any) => onChange(e)}
      className="smdn-textarea"
      data-test="textarea-component"
    >
      {children}
    </StyledTextarea>
  )
}

Textarea.defaultProps = {
  rows: 4,
  cols: 50,
  autofocus: false,
  disabled: false,
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
  cols: PropTypes.number,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Textarea
