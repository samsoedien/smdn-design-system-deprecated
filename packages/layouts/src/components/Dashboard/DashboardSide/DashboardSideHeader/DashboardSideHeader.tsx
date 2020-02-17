import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDashboardSideHeader = styled.header`
  grid-area: dashboard-side-header;
`
export interface IDashboardSideHeaderProps {
  children: React.ReactNode
}

const DashboardSideHeader: React.FC<IDashboardSideHeaderProps> = ({ children }) => {
  return (
    <StyledDashboardSideHeader className="smdn-dashboard-side-header" data-test="dashboard-side-header-component">
      {children}
    </StyledDashboardSideHeader>
  )
}

DashboardSideHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardSideHeader
