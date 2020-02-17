import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardContent = styled.section`
  background-color: #fff;
  margin: 12px;
  border-radius: 3px;
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
