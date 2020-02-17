import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDashboardFooter = styled.footer`
  grid-area: dashboard-footer;
  width: 100%;
  height: 36px;
`

export interface IDashboardFooter {}

const DashboardFooter: React.FC<IDashboardFooter> = () => {
  return (
    <StyledDashboardFooter className="smdn-dashboard-footer" data-test="dashboard-footer-component">
      <span>copyright</span>
    </StyledDashboardFooter>
  )
}

DashboardFooter.propTypes = {}

export default DashboardFooter
