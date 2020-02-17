import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPageContent = styled.div<IPageContentProps>`
  width: 1200px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  padding: 48px 0;
`

interface IPageContentProps {
  children: React.ReactNode
}

const PageContent: React.FC<IPageContentProps> = ({ children }) => {
  return (
    <StyledPageContent className="smdn-page-content" data-test="page-content-component">
      {children}
    </StyledPageContent>
  )
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageContent
