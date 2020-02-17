import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardFooter = styled.footer`
  min-height: 48px;
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
