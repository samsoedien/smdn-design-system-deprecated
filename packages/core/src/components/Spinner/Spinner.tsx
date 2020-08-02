import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { TokenColorPaletteGrey05 } from '@smdn/tokens'
import { Size } from '@smdn/shared'

const StyledSpinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledSpinnerLoader = styled.div`
  border: 8px solid ${TokenColorPaletteGrey05}; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${(props) =>
    props.size === 'small' &&
    css`
      width: 24px;
      height: 24px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 48px;
      height: 48px;
    `}
`

const StyledSpinnerLabel = styled.span`
  font-size: 12px;
  text-align: center;
`

export interface ISpinnerProps {
  size?: Size
  loadingText?: string
}

const Spinner: React.FC<ISpinnerProps> = ({ size, loadingText }) => {
  return (
    <StyledSpinner className="smdn-spinner" data-test="spinner-component">
      <StyledSpinnerLoader size={size} />
      {loadingText && <StyledSpinnerLabel>{loadingText}</StyledSpinnerLabel>}
    </StyledSpinner>
  )
}

Spinner.defaultProps = {
  size: 'medium',
  loadingText: undefined,
}

Spinner.propTypes = {
  size: PropTypes.oneOf<Size>(['small', 'medium', 'large']),
  loadingText: PropTypes.string,
}

export default Spinner
