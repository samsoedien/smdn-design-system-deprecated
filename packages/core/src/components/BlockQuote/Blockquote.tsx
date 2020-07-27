import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05, TokenColorPaletteGrey10 } from '@smdn/tokens'

const StyledBlockquote = styled.blockquote`
  background-color: ${TokenColorPaletteGrey05};
  padding: 24px;
  border-left: 6px solid ${TokenColorPaletteGrey10};
`

export interface IBlockquoteProps {
  children: React.ReactNode
}

const Blockquote: React.FC<IBlockquoteProps> = ({ children }) => {
  return (
    <StyledBlockquote className="smdn-blockquote" data-test="blockquote-component">
      {children}
    </StyledBlockquote>
  )
}

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blockquote
