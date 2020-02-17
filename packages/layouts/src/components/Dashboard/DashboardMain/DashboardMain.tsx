import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDashboardMain = styled.main`
  grid-area: dashboard-main;
`

export interface IDashboardMainProps {
  children: React.ReactNode
}

const DashboardMain: React.FC<IDashboardMainProps> = ({ children }) => {
  return (
    <StyledDashboardMain className="smdn-dashboard-main" data-test="dashboard-main-component">
      {children}
    </StyledDashboardMain>
  )
}

DashboardMain.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardMain
