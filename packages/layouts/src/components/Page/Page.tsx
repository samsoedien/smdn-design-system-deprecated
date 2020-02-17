import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPage = styled.div<IPageProps>`
  width: 100vw;
  height: 100%;
  background-color: #efefef;
`

interface IPageProps {
  children: React.ReactNode
}

const Page: React.FC<IPageProps> = ({ children }) => {
  return (
    <StyledPage className="smdn-page" data-test="page-component">
      {children}
    </StyledPage>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
