import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledImage = styled.img<Partial<IAvatarProps>>`
  display: inline-block;
  width: 48px;
  height: 48px;
  ${props =>
    props.type === 'user' &&
    css`
      border-radius: 50%;
    `};
  ${props =>
    props.type === 'product' &&
    css`
      border-radius: 3px;
    `};
`

export type Type = 'user' | 'product'

export interface IAvatarProps {
  name: string
  imageUrl?: string
  type?: Type
}

const Avatar: React.FC<IAvatarProps> = ({ imageUrl, name, type }) => {
  return <StyledImage src={imageUrl} alt={name} type={type} className="smdn-avatar" data-test="avatar-component" />
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
