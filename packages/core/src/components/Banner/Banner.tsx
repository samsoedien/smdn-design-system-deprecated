import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { CloseIcon } from '@smdn/icons'
import {
  TokenColorGreyPalette05,
  TokenColorBackgroundInfoBase,
  TokenColorBackgroundSuccessBase,
  TokenColorBackgroundWarningBase,
  TokenColorBackgroundDangerBase,
  TokenSpacingSmall,
} from '@smdn/tokens'
import { Color } from '@smdn/shared'

const StyledBanner = styled.div<IBannerProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: ${TokenColorGreyPalette05};
  box-sizing: border-box;
  padding: ${TokenSpacingSmall};
  align-self: center;
  ${(props) =>
    props.color === 'warning' &&
    css`
      background-color: ${TokenColorBackgroundWarningBase};
    `}
  ${(props) =>
    props.centerText &&
    css`
      text-align: center;
    `};
`

const StyledCloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${TokenSpacingSmall};
  transform: translateY(-50%);
  border: none;

  &focus {
    outline: none;
  }
`

const StyledText = styled.span`
  align-self: center;
  text-decoration: underline;
`

export interface IBannerProps {
  color?: Color
  centerText?: boolean
  children: React.ReactNode
}

const Banner: React.FC<IBannerProps> = ({ color, centerText, children }) => {
  const handleClick = () => console.log('close component')
  return (
    <StyledBanner color={color} centerText={centerText} className="smdn-banner" data-test="banner-component">
      <StyledText>{children}</StyledText>
      <StyledCloseButton type="button" onClick={handleClick}>
        <CloseIcon />
      </StyledCloseButton>
    </StyledBanner>
  )
}

Banner.defaultProps = {
  color: 'info',
  centerText: false,
}

Banner.propTypes = {
  color: PropTypes.oneOf<Color>(['info', 'success', 'warning', 'danger']),
  centerText: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Banner
