import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTag = styled.span<Partial<ITagProps>>`
  background-color: ${props => `${props.color}`};
  height: 18px;
  line-height: 18px;
  padding: 4px;
  border-radius: 9px;
`
export interface ITagProps {
  color?: string
  isClosable?: boolean
  children: React.ReactNode
}

const Tag: React.FC<ITagProps> = ({ color, isClosable, children }) => {
  return (
    <StyledTag color={color} className="smdn-tag" data-test="tag-component">
      <span>{children}</span>
      {isClosable && <button type="button">X</button>}
    </StyledTag>
  )
}

Tag.defaultProps = {
  isClosable: false,
  color: '#efefef',
}

Tag.propTypes = {
  color: PropTypes.string,
  isClosable: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Tag
