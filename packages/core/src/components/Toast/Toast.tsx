import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledToast = styled.div``

export type Color = 'info' | 'success' | 'warning' | 'danger'

export interface IToastProps {
  color?: Color
  children: React.ReactNode
}

const Toast: React.FC<IToastProps> = ({ color, children }) => {
  return (
    <StyledToast color={color} className="smdn-toast" data-test="toast-component">
      {children}
    </StyledToast>
  )
}

Toast.defaultProps = {
  color: 'info',
}

Toast.propTypes = {
  color: PropTypes.oneOf<Color>(['info', 'success', 'warning', 'danger']),
  children: PropTypes.node.isRequired,
}

export default Toast
