import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCloseButton = styled.button<Partial<ICloseButtonProps>>`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;

  &:focus {
    outline: none;
  }
`
export interface ICloseButtonProps {
  onClose?: () => void
}

const CloseButton: React.FC<ICloseButtonProps> = ({ onClose, ...props }) => {
  return (
    <StyledCloseButton
      {...props}
      type="button"
      aria-label="Close"
      className="smdn-close-button"
      data-test="close-button-component"
    >
      <span>x</span>
    </StyledCloseButton>
  )
}

CloseButton.defaultProps = {
  onClose: undefined,
}

CloseButton.propTypes = {
  onClose: PropTypes.func,
}

export default CloseButton
