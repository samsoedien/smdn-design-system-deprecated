import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorBackgroundAlt, TokenSpacingSmall, TokenSizingLarge, TokenSizeRadiusSmall } from '@smdn/tokens'

const StyledCardContent = styled.section`
  /* width: 100%; */
  min-height: ${TokenSizingLarge};
  height: 100%;
  background-color: ${TokenColorBackgroundAlt};
  margin: ${TokenSpacingSmall};
  border-radius: ${TokenSizeRadiusSmall};
`

export interface ICardContentProps {
  children: React.ReactNode
}

const CardContent: React.FC<ICardContentProps> = ({ children }) => {
  return (
    <StyledCardContent className="smdn-card-content" data-test="card-content-component">
      {children}
    </StyledCardContent>
  )
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardContent
