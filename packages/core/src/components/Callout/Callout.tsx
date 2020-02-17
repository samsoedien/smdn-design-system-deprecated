import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCallout = styled.div`
  width: 100%;
`

export type Color = 'info' | 'success' | 'warning' | 'danger'

export interface ICalloutProps {
  color?: Color
  children: React.ReactNode
}

const Callout: React.FC<ICalloutProps> = ({ color, children }) => {
  return (
    <StyledCallout color={color} className="smdn-callout" data-test="callout-component">
      {children}
    </StyledCallout>
  )
}

Callout.defaultProps = {
  color: 'info',
}

Callout.propTypes = {
  color: PropTypes.oneOf<Color>(['info', 'success', 'warning', 'danger']),
  children: PropTypes.node.isRequired,
}

export default Callout
