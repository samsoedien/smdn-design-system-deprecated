import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardHeader = styled.header`
  background-color: #fff;
`

export interface ICardHeaderProps {
  children: React.ReactNode
}

const CardHeader: React.FC<ICardHeaderProps> = ({ children }) => {
  return (
    <StyledCardHeader className="smdn-card-header" data-test="card-header-component">
      {children}
    </StyledCardHeader>
  )
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardHeader
