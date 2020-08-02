import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Color } from '@smdn/shared'

import CloseButton from './CloseButton'

const StyledAlert = styled.div<Partial<IAlertProps>>`
  position: relative;
  padding: 24px;

  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: blue;
    `};

  ${(props) =>
    props.color === 'info' &&
    css`
      background-color: lightgrey;
    `};
`

export interface IAlertProps {
  color?: Color
  isClosable?: boolean
  children: React.ReactNode
}

const Alert: React.FC<IAlertProps> = ({ color, isClosable, children }) => {
  const handleOnClose = () => console.log('closing alert')
  return (
    <StyledAlert color={color} role="alert" className="smdn-alert" data-test="alert-component">
      {children}
      {isClosable && <CloseButton onClose={handleOnClose()} />}
    </StyledAlert>
  )
}

Alert.defaultProps = {
  color: 'info',
  isClosable: false,
}

Alert.propTypes = {
  color: PropTypes.oneOf<Color>(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  isClosable: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Alert
