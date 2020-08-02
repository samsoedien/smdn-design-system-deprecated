import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenSpacingSmall } from '@smdn/tokens'
import { Alignment } from '@smdn/shared'

const StyledTooltipContainer = styled.div`
  position: absolute;
  display: none;
  top: 24px;
  background-color: #efefef;
  padding: ${TokenSpacingSmall};
`
const StyledTooltip = styled.div<ITooltipProps>`
  position: absolute;

  &:hover ${StyledTooltipContainer} {
    transition: 0.2s;
    display: block;
  }
`

export interface ITooltipProps {
  tooltipText: string
  alignment?: Alignment
  children: React.ReactNode
}

const Tooltip: React.FC<ITooltipProps> = ({ tooltipText, alignment, children }) => {
  return (
    <StyledTooltip alignment={alignment} className="smdn-tooltip" data-test="tooltip-component">
      <StyledTooltipContainer>{tooltipText}</StyledTooltipContainer>
      {children}
    </StyledTooltip>
  )
}

Tooltip.defaultProps = {
  alignment: 'top',
}

Tooltip.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf<Alignment>(['top', 'bottom', 'left', 'right']),
  children: PropTypes.node.isRequired,
}

export default Tooltip
