import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  TokenSpacingXxSmall,
  TokenSpacingXSmall,
  TokenSpacingSmall,
  TokenSpacingMedium,
  TokenSpacingLarge,
  TokenSpacingXLarge,
  TokenSpacingXxLarge,
} from '@smdn/tokens'

const StyledSpacer = styled.div<ISpacerProps>`
  width: 100%;
  ${props =>
    props.size === 'xx-small' &&
    css`
      height: ${TokenSpacingXxSmall};
    `};
  ${props =>
    props.size === 'x-small' &&
    css`
      height: ${TokenSpacingXSmall};
    `};
  ${props =>
    props.size === 'small' &&
    css`
      height: ${TokenSpacingSmall};
    `};
  ${props =>
    props.size === 'medium' &&
    css`
      height: ${TokenSpacingMedium};
    `};
  ${props =>
    props.size === 'large' &&
    css`
      height: ${TokenSpacingLarge};
    `};
  ${props =>
    props.size === 'x-large' &&
    css`
      height: ${TokenSpacingXLarge};
    `};
  ${props =>
    props.size === 'xx-large' &&
    css`
      height: ${TokenSpacingXxLarge};
    `};
`

export type Size = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'

export interface ISpacerProps {
  size?: Size
}

const Spacer: React.FC<ISpacerProps> = ({ size }) => {
  return <StyledSpacer size={size} className="smdn-spacer" data-test="spacer-component" />
}

Spacer.defaultProps = {
  size: 'small',
}

Spacer.propTypes = {
  size: PropTypes.oneOf<Size>(['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large']),
}

export default Spacer
