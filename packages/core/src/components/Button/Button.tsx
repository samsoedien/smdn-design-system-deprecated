import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  TokenSpacingNone,
  TokenSpacingSmall,
  TokenColorBrandButtonPrimaryBase,
  TokenColorBrandButtonPrimaryHover,
  TokenColorBrandButtonPrimaryDisabled,
} from '@smdn/tokens'

const StyledButton = styled.button<IButtonProps>`
  /* height: ${props => props.size}; */
  min-width: 32px;
  padding: ${TokenSpacingNone} ${TokenSpacingSmall};
  border: none;
  border-radius: 4px;
  line-height: 32px;
  transition: 0.2s;
  user-select: none;
  cursor: pointer;

  ${props =>
    props.isLoading &&
    css`
      cursor: progress;
    `};
  ${props =>
    props.appearance === 'primary' &&
    css`
      background-color: ${TokenColorBrandButtonPrimaryBase};
      color: #fff;
      &:hover,
      &:focus {
        background-color: ${TokenColorBrandButtonPrimaryHover};
        transition: 0.2s;
      }
      &[disabled] {
        background-color: ${TokenColorBrandButtonPrimaryDisabled};
      }
    `};
  ${props =>
    props.appearance === 'secondary' &&
    css`
      background-color: #efefef;
      &:hover,
      &:focus {
        background-color: #d3d3d3;
        transition: 0.2s;
      }
    `};
  ${props =>
    props.appearance === 'tertiary' &&
    css`
      background-color: transparent;
      &:hover,
      &:focus {
        background-color: #d3d3d3;
        transition: 0.2s;
      }
    `};
  ${props =>
    props.size === 'regular' &&
    css`
      height: 36px;
    `};
  ${props =>
    props.size === 'small' &&
    css`
      height: 30px;
    `};
  ${props =>
    props.size === 'large' &&
    css`
      height: 48px;
    `};
`

export type Appearance = 'primary' | 'secondary' | 'tertiary'
export type Size = 'regular' | 'small' | 'large'

export interface IButtonProps {
  appearance?: Appearance
  size?: Size
  isLoading?: boolean
  type?: any
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ appearance, size, isLoading, type, disabled, children }) => {
  const onClickHandler = () => console.log('clicked')
  return (
    <StyledButton
      appearance={appearance}
      size={size}
      isLoading={isLoading}
      type={type || 'submit'}
      disabled={disabled}
      onClick={() => onClickHandler()}
      className="smdn-b-button"
      data-test="button-component"
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  appearance: 'secondary',
  size: 'regular',
  isLoading: false,
  type: 'submit',
  disabled: false,
}

Button.propTypes = {
  appearance: PropTypes.oneOf<Appearance>(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf<Size>(['regular', 'small', 'large']),
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
