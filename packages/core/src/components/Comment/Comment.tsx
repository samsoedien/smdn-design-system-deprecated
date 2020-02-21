import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledComment = styled.div``

export interface ICommentProps {
  children: React.ReactNode
}

const Comment: React.FC<ICommentProps> = ({ children }) => {
  return (
    <StyledComment className="smdn-comment" data-test="comment-component">
      {children}
    </StyledComment>
  )
}

Comment.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Comment
