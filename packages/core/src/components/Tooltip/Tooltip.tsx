import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTooltip = styled.div<ITooltipProps>``

export type Alignment = 'top' | 'bottom' | 'left' | 'right'

export interface ITooltipProps {
  alignment?: Alignment
  children: React.ReactNode
}

const Tooltip: React.FC<ITooltipProps> = ({ alignment, children }) => {
  return (
    <StyledTooltip alignment={alignment} className="smdn-tooltip" data-test="tooltip-component">
      {children}
    </StyledTooltip>
  )
}

Tooltip.defaultProps = {
  alignment: 'top',
}

Tooltip.propTypes = {
  alignment: PropTypes.oneOf<Alignment>(['top', 'bottom', 'left', 'right']),
  children: PropTypes.node.isRequired,
}

export default Tooltip
