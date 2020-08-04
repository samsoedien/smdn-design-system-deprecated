import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { TokenSpacingMedium, TokenColorPaletteGrey05, TokenColorPaletteGrey10 } from '@smdn/tokens'
import { Color } from '@smdn/shared'

const StyledBlockquote = styled.div<Partial<IBlockquoteProps>>`
  padding: ${TokenSpacingMedium};
  background-color: ${TokenColorPaletteGrey05};
  border-left: 3px solid ${TokenColorPaletteGrey10};

  ${(props) =>
    props.color === 'success' &&
    css`
      background-color: lightblue;
      border-color: blue;
    `}
`

export interface IBlockquoteProps {
  color?: Color
  children: React.ReactNode
}

const Blockquote: React.FC<IBlockquoteProps> = ({ color, children }) => {
  return (
    <StyledBlockquote color={color} className="smdn-blockquote" data-test="blockquote-component">
      {children}
    </StyledBlockquote>
  )
}

Blockquote.defaultProps = {
  color: 'info',
}

Blockquote.propTypes = {
  color: PropTypes.oneOf<Color>(['info']),
  children: PropTypes.node.isRequired,
}

export default Blockquote
