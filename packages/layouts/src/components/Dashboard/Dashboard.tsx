import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DashboardNavigation from './DashboardNavigation'
import DashboardSide from './DashboardSide'
import DashboardMain from './DashboardMain'
import DashboardSideHeader from './DashboardSide/DashboardSideHeader'
import DashboardSideToolbar from './DashboardSide/DashboardSideToolbar'
import DashboardFooter from './DashboardFooter'
import HeroBanner from '../HeroBanner'

const StyledDashboard = styled.div`
  background-color: #efefef;
  width: 100%;
  height: 100%;
  min-width: 376px;
  overflow-x: hidden;
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 66px 1fr 36px;
  grid-template-columns: 384px 1fr 96px;
  grid-template-areas:
    'dashboard-navigation dashboard-navigation dashboard-navigation '
    'dashboard-side . .'
    'dashboard-side dashboard-main .'
    'dashboard-footer dashboard-footer .';
`

export interface IDashboardProps {
  children: React.ReactNode
}

const Dashboard: React.FC<IDashboardProps> = ({ children }) => {
  return (
    <StyledDashboard className="smdn-dashboard" data-test="dashboard-component">
      <StyledContainer>
        <HeroBanner />
        <DashboardNavigation>Navigation</DashboardNavigation>
        <DashboardSide>
          <DashboardSideHeader>SideHeader</DashboardSideHeader>
          <DashboardSideToolbar>SideToolbar</DashboardSideToolbar>
        </DashboardSide>
        <DashboardMain>{children}</DashboardMain>
        <DashboardFooter />
      </StyledContainer>
    </StyledDashboard>
  )
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Dashboard
