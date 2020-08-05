import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ComboboxInput from './ComboboxInput'
import ComboboxOptionList from './ComboboxOptionList'

const StyledCombobox = styled.div``

export interface IComboboxProps {
  filterOptions: string[]
}

const Combobox: React.FC<IComboboxProps> = ({ filterOptions }) => {
  return (
    <StyledCombobox className="smdn-combobox" data-test="combobox-component">
      <ComboboxInput appliedFilterOptions={filterOptions} />
      <ComboboxOptionList suggestedFilterOptions={filterOptions} />
    </StyledCombobox>
  )
}

Combobox.propTypes = {
  filterOptions: PropTypes.array.isRequired,
}

export default Combobox
