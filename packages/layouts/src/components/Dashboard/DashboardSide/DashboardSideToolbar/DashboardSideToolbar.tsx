import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDashboardSideToolbar = styled.div`
  grid-area: dashboard-side-toolbar;
  outline: 1px solid green;
`

export interface IDashboardSideToolbarProps {
  children: React.ReactNode
}

const DashboardSideToolbar: React.FC<IDashboardSideToolbarProps> = ({ children }) => {
  return (
    <StyledDashboardSideToolbar className="smdn-dashboard-side-toolbar" data-test="dashboard-side-toolbar-component">
      {children}
    </StyledDashboardSideToolbar>
  )
}

DashboardSideToolbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardSideToolbar
