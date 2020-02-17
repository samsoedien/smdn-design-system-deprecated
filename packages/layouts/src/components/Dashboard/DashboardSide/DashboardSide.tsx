import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDashboardSide = styled.aside`
  grid-area: dashboard-side;
  position: relative;
  width: 100%;
  height: calc(100vh - 72px);
  display: grid;
  grid-template-rows: 194px 1fr 36px;
  grid-template-areas:
    'dashboard-side-header'
    'dashboard-side-toolbar'
    '.';
  grid-auto-columns: minmax(auto, 300px);
  padding: 0 36px 0 48px;
  overflow: hidden;
`

export interface IDashboardSideProps {
  children: React.ReactNode
}

const DashboardSide: React.FC<IDashboardSideProps> = ({ children }) => {
  return (
    <StyledDashboardSide className="smdn-dashboard-side" data-test="dashboard-side-component">
      {children}
    </StyledDashboardSide>
  )
}

DashboardSide.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DashboardSide
