import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05 } from '@smdn/tokens'

const StyledBadge = styled.span`
  background-color: ${TokenColorPaletteGrey05};
`

export interface IBadgeProps {}

const Badge: React.FC<IBadgeProps> = () => {
  return <StyledBadge className="smdn-badge" data-test="badge-component" />
}

Badge.propTypes = {}

export default Badge
