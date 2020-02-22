import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPageHeader = styled.header``

interface IPageHeaderProps {
  children: React.ReactNode
}

const PageHeader: React.FC<IPageHeaderProps> = ({ children }) => {
  return (
    <StyledPageHeader className="smdn-page-header" data-test="page-header-component">
      {children}
    </StyledPageHeader>
  )
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageHeader
