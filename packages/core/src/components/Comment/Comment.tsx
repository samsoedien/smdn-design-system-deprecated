import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  TokenSpacingSmall,
  TokenSpacingMedium,
  TokenSpacingXLarge,
  TokenColorTextLabel,
  TokenColorTextDefault,
} from '@smdn/tokens'
import Avatar from '../Avatar'

const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: ${TokenSpacingXLarge};
`

const StyledUsername = styled.span`
  color: ${TokenColorTextDefault};
  font-weight: bold;
`

const StyledTimestamp = styled.span`
  color: ${TokenColorTextLabel};
`

const StyledText = styled.span`
  margin-top: ${TokenSpacingSmall};
  margin-left: ${TokenSpacingMedium};
`

const StyledCommentContainer = styled.div`
  display: flex;
`

export interface ICommentProps {
  children: React.ReactNode
}

const Comment: React.FC<ICommentProps> = ({ children }) => {
  return (
    <StyledComment className="smdn-comment" data-test="comment-component">
      <StyledContainer>
        <StyledUsername>Username</StyledUsername>
        <StyledTimestamp>31 Jan 2020</StyledTimestamp>
      </StyledContainer>
      <StyledCommentContainer>
        <Avatar type="product" name="John" />
        <StyledText>{children}</StyledText>
      </StyledCommentContainer>
    </StyledComment>
  )
}

Comment.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Comment
