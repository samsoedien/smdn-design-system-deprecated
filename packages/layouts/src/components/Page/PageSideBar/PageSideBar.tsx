import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPageSideBar = styled.div`
  width: 320px;
  height: 100vh;
  background: grey;
`

export interface IPageSideBar {
  children: React.ReactNode
}

const PageSideBar: React.FC<IPageSideBar> = ({ children }) => {
  return (
    <StyledPageSideBar className="smdn-page-side-bar" data-test="page-side-bar-component">
      {children}
    </StyledPageSideBar>
  )
}

PageSideBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageSideBar
