import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBadge = styled.span``

export interface IBadgeProps {}

const Badge: React.FC<IBadgeProps> = () => {
  return <StyledBadge className="smdn-badge" data-test="badge-component" />
}

Badge.propTypes = {}

export default Badge
