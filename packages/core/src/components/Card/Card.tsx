import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export type Color = 'white' | 'grey'
export interface ICardProps {
  color?: Color
  elevation?: number
  withBorder?: boolean
  children: React.ReactNode
}

const StyledCard = styled.div<ICardProps>`
  ${props =>
    props.color === 'white' &&
    css`
      background-color: #fff;
    `};
  ${props =>
    props.color === 'grey' &&
    css`
      background-color: #f0f3f5;
    `};
  padding: 24px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
`

const Card: React.FC<ICardProps> = ({ color, elevation, withBorder, children }) => {
  return (
    <StyledCard
      color={color}
      elevation={elevation}
      withBorder={withBorder}
      className="smdn-card"
      data-test="card-component"
    >
      {children}
    </StyledCard>
  )
}

Card.defaultProps = {
  color: 'white',
  elevation: 1,
  withBorder: true,
}

Card.propTypes = {
  color: PropTypes.oneOf<Color>(['white', 'grey']),
  elevation: PropTypes.number,
  withBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Card
