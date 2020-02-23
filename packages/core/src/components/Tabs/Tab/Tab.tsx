import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTab = styled.div``

export interface ITabProps {
  children: React.ReactNode
}

const Tab: React.FC<ITabProps> = ({ children }) => {
  return (
    <StyledTab className="smdn-tab" data-test="tab-component">
      {children}
    </StyledTab>
  )
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tab
