import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  TokenColorBackgroundAlt,
  TokenColorPaletteGrey05,
  TokenSizingXLarge,
  TokenSpacingXSmall,
  TokenShadowLarge,
} from '@smdn/tokens'
import { Color } from '@smdn/shared'

export interface ICardProps {
  color?: Color | 'white' | 'grey'
  elevation?: number
  withBorder?: boolean
  children: React.ReactNode
}

const StyledCard = styled.div<ICardProps>`
  ${(props) =>
    props.color === 'white' &&
    css`
      background-color: ${TokenColorBackgroundAlt};
    `};
  ${(props) =>
    props.color === 'grey' &&
    css`
      background-color: ${TokenColorPaletteGrey05};
    `};
  min-height: ${TokenSizingXLarge};
  border-radius: ${TokenSpacingXSmall};
  box-shadow: ${TokenShadowLarge};

  /* width: 100%; */
  text-align: center;
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
  color: PropTypes.oneOf<Color | 'white' | 'grey'>(['white', 'grey']),
  elevation: PropTypes.number,
  withBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Card
