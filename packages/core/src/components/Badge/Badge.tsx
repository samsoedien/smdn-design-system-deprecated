import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { TokenColorPaletteGrey05 } from '@smdn/tokens'
import { Color } from '@smdn/shared'

const StyledBadge = styled.span<IBadgeProps>`
  margin: 0 6px;
  padding: 6px;
  background-color: ${TokenColorPaletteGrey05};

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 12px;
    `}
`

export interface IBadgeProps {
  color?: Color
  rounded?: boolean
  children: React.ReactNode
}

const Badge: React.FC<IBadgeProps> = ({ color, rounded, children }) => {
  return (
    <StyledBadge color={color} rounded={rounded} className="smdn-badge" data-test="badge-component">
      {children}
    </StyledBadge>
  )
}

Badge.defaultProps = {
  color: 'info',
  rounded: false,
}

Badge.propTypes = {
  color: PropTypes.oneOf<Color>(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  rounded: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Badge
