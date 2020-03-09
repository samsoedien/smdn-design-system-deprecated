import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenSpacingSmall } from '@smdn/tokens'

const StyledCardFooter = styled.footer`
  min-height: 48px;
  margin: ${TokenSpacingSmall};
  display: flex;
  align-items: center;
`

export interface ICardFooterProps {
  children: React.ReactNode
}

const CardFooter: React.FC<ICardFooterProps> = ({ children }) => {
  return (
    <StyledCardFooter className="smdn-card-footer" data-test="card-footer-component">
      {children}
    </StyledCardFooter>
  )
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardFooter
