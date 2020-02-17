import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledSpacer = styled.br<ISpacerProps>`
  width: 100%;
  ${props =>
    props.size === 'xxs' &&
    css`
      height: 3px;
    `};
  ${props =>
    props.size === 'xs' &&
    css`
      height: 6px;
    `};
  ${props =>
    props.size === 'sm' &&
    css`
      height: 12px;
    `};
  ${props =>
    props.size === 'md' &&
    css`
      height: 24px;
    `};
  ${props =>
    props.size === 'lg' &&
    css`
      height: 48px;
    `};
`

export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ISpacerProps {
  size?: Size
}

const Spacer: React.FC<ISpacerProps> = ({ size }) => {
  return <StyledSpacer size={size} className="smdn-spacer" data-test="spacer-component" />
}

Spacer.defaultProps = {
  size: 'sm',
}

Spacer.propTypes = {
  size: PropTypes.oneOf<Size>(['xxs', 'xs', 'sm', 'md', 'lg', 'xl']),
}

export default Spacer
