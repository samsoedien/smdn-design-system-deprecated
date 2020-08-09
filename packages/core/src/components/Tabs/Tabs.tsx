import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05 } from '@smdn/tokens'

import Tab from './Tab'

const StyledTabs = styled.div`
  border-bottom: 1px solid ${TokenColorPaletteGrey05};
`

export interface ITabsProps {}

const Tabs: React.FC<ITabsProps> = () => {
  const [active, setActive] = useState<string>('Arrivals')
  const onClickCallback = (label: string) => setActive(label)
  return (
    <StyledTabs className="smdn-tabs" data-test="tabs-component">
      <Tab label="Arrivals" handleClick={onClickCallback} activeTab={active} />
      <Tab label="Departments" handleClick={onClickCallback} activeTab={active} />
    </StyledTabs>
  )
}

Tabs.propTypes = {}

export default Tabs
