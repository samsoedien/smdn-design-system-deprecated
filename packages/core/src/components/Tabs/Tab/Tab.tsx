import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { TokenColorPaletteGrey05, TokenColorBackgroundSuccessDarker } from '@smdn/tokens'

const StyledTab = styled.button<any>`
  height: 48px;
  border: none;
  padding: 0 12px;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${TokenColorPaletteGrey05};
  }

  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid ${TokenColorBackgroundSuccessDarker};
      font-weight: bold;
      color: ${TokenColorBackgroundSuccessDarker};
    `}
`
export interface ITabProps {
  label: string
  activeTab: string
  handleClick: (label: string) => void
}

const Tab: React.FC<ITabProps> = ({ label, activeTab, handleClick }) => {
  return (
    <StyledTab
      active={activeTab === label}
      onClick={handleClick(label)}
      role="tab"
      type="button"
      className="smdn-tab"
      data-test="tab-component"
    >
      {label}
    </StyledTab>
  )
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Tab
