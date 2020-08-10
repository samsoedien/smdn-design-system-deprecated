import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenFontFamilySansSerif } from '@smdn/tokens'
import Button from '../Button'

const StyledJumbotron = styled.div`
  font-family: ${TokenFontFamilySansSerif};
  color: white;
  background: black;
  padding: 24px;
`

const StyledJumbotronHeading = styled.h2`
  font-size: 48px;
  font-weight: bold;
`

const StyledJumbotronLeadParagraph = styled.p`
  font-size: 18px;
  font-weight: 300;
`

const StyledJumbotronParagraph = styled.p`
  font-size: 14px;
`

export interface IJumbotronProps {
  children: React.ReactNode
}

const Jumbotron: React.FC<IJumbotronProps> = ({ children }) => {
  return (
    <StyledJumbotron className="smdn-jumbotron" data-test="jumbotron-component">
      <StyledJumbotronHeading>Hello world!</StyledJumbotronHeading>
      <StyledJumbotronLeadParagraph>
        This is a jumbotron component to draw extra attention. It is best placed in a hero banner
      </StyledJumbotronLeadParagraph>

      <StyledJumbotronParagraph>{children}</StyledJumbotronParagraph>
      <Button>Learn more</Button>
    </StyledJumbotron>
  )
}

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Jumbotron
