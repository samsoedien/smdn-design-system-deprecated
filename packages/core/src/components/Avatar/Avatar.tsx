import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { TokenColorBackgroundGrey05, TokenSizingLarge, TokenSizeRadiusSmall, TokenSizeRadiusCircle } from '@smdn/tokens'

const StyledImage = styled.img<Partial<IAvatarProps>>`
  display: inline-block;
  width: ${TokenSizingLarge};
  height: ${TokenSizingLarge};
  ${(props) =>
    props.type === 'user' &&
    css`
      border-radius: ${TokenSizeRadiusCircle};
    `};
  ${(props) =>
    props.type === 'product' &&
    css`
      border-radius: ${TokenSizeRadiusSmall};
    `};
`

const StyledImagePlaceholder = styled.div<Partial<IAvatarProps>>`
  /* display: inline-block; */
  width: ${TokenSizingLarge};
  height: ${TokenSizingLarge};
  background-color: ${TokenColorBackgroundGrey05};
  ${(props) =>
    props.type === 'user' &&
    css`
      border-radius: ${TokenSizeRadiusCircle};
    `};
  ${(props) =>
    props.type === 'product' &&
    css`
      border-radius: ${TokenSizeRadiusSmall};
    `};
  display: flex;
  justify-content: center;
  align-items: center;
`

export type Type = 'user' | 'product'

export interface IAvatarProps {
  name: string
  imageUrl?: string
  type?: Type
}

const Avatar: React.FC<IAvatarProps> = ({ imageUrl, name, type }) => {
  return imageUrl ? (
    <StyledImage src={imageUrl} alt={name} type={type} className="smdn-avatar" data-test="avatar-component" />
  ) : (
    <StyledImagePlaceholder type={type} className="smdn-avatar" data-test="avatar-component">
      {name}
    </StyledImagePlaceholder>
  )
}

Avatar.defaultProps = {
  imageUrl: undefined,
  type: 'user',
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  type: PropTypes.oneOf<Type>(['user', 'product']),
}

export default Avatar
