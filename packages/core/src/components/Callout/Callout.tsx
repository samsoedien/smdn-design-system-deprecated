import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledCallout = styled.div<Partial<ICalloutProps>>`
  width: 100%;
  font-size: 14px;
  ${props =>
    props.isCondensed &&
    css`
      font-size: 12px;
    `};
`

export type Color = 'info' | 'success' | 'warning' | 'danger'

export interface ICalloutProps {
  color?: Color
  heading: string
  isCondensed?: boolean
  children: React.ReactNode
}

const Callout: React.FC<ICalloutProps> = ({ color, heading, isCondensed, children }) => {
  return (
    <StyledCallout
      color={color}
      heading={heading}
      isCondensed={isCondensed}
      className="smdn-callout"
      data-test="callout-component"
    >
      {heading && <h6>{heading}</h6>}
      {children}
    </StyledCallout>
  )
}

Callout.defaultProps = {
  color: 'info',
  heading: undefined,
  isCondensed: false,
}

Callout.propTypes = {
  color: PropTypes.oneOf<Color>(['info', 'success', 'warning', 'danger']),
  heading: PropTypes.string,
  isCondensed: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Callout