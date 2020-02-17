import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDashboardNavigation = styled.nav`
  grid-area: dashboard-navigation;
`

export interface IDashboardNavigationProps {
  children: React.ReactNode
}

const DashboardNavigation: React.FC<IDashboardNavigationProps> = ({ children }) => {
  return (
    <StyledDashboardNavigation className="smdn-dashboard-navigation" data-test="dashboard-navigation-component">
      {children}
    </StyledDashboardNavigation>
  )
}

DashboardNavigation.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardNavigation
