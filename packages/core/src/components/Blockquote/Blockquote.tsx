import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { TokenColorPaletteGrey05, TokenColorPaletteGrey10 } from '@smdn/tokens'

const StyledBlockquote = styled.blockquote`
  background-color: ${TokenColorPaletteGrey05};
  padding: 24px;
  border-left: 6px solid ${TokenColorPaletteGrey10};
  margin: 12px 0;
  ${(props) =>
    props.color === 'success' &&
    css`
      background-color: lightblue;
    `};
`

export interface IBlockquoteProps {
  children: React.ReactNode
  color?: string
}

const Blockquote: React.FC<IBlockquoteProps> = ({ children, color }) => {
  return (
    <StyledBlockquote color={color} className="smdn-blockquote" data-test="blockquote-component">
      {children}
    </StyledBlockquote>
  )
}

Blockquote.defaultProps = {
  color: undefined,
}

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}

export default Blockquote
