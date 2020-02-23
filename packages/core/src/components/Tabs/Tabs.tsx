import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tab from './Tab'

const StyledTabs = styled.div``

export interface ITabsProps {}

const Tabs: React.FC<ITabsProps> = () => {
  return (
    <StyledTabs className="smdn-tabs" data-test="tabs-component">
      <Tab>Tab</Tab>
    </StyledTabs>
  )
}

Tabs.propTypes = {}

export default Tabs
