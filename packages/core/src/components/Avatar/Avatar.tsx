import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export interface IAvatarProps {
  name: string
  imageUrl?: string
}

const Avatar: React.FC<IAvatarProps> = ({ imageUrl, name }) => {
  return <StyledImage src={imageUrl} alt={name} className="smdn-avatar" data-test="avatar-component" />
}

Avatar.defaultProps = {
  imageUrl: undefined,
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
}

export default Avatar
