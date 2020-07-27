import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05 } from '@smdn/tokens'

const StyledCode = styled.code`
  background-color: ${TokenColorPaletteGrey05};
  font-family: monospace;
`

export interface ICodeProps {
  children: React.ReactNode
}

const Code: React.FC<ICodeProps> = ({ children }) => {
  return (
    <StyledCode className="smdn-code" data-test="code-component">
      {children}
    </StyledCode>
  )
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Code
