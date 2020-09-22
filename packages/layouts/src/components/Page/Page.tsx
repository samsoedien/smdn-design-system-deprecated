import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export interface IPageProps {
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
