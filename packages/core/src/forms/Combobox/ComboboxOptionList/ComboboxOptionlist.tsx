import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledComboboxOptionList = styled.div<Partial<IComboboxOptionListProps>>``

export interface IComboboxOptionListProps {
  suggestedFilterOptions: string[]
}

const ComboboxOptionlist: React.FC<IComboboxOptionListProps> = ({ suggestedFilterOptions }) => {
  return (
    <StyledComboboxOptionList
      suggestedFilterOptions={suggestedFilterOptions}
      className="smdn-combobox-option-list"
      data-test="combobox-option-list-component"
    />
  )
}

ComboboxOptionlist.propTypes = {
  suggestedFilterOptions: PropTypes.array.isRequired,
}

export default ComboboxOptionlist
