import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tag from '../../Tag'

const StyledComboboxInput = styled.div<Partial<IComboboxInputProps>>``

export interface IComboboxInputProps {
  appliedFilterOptions: string[]
}

const ComboboxInput: React.FC<IComboboxInputProps> = ({ appliedFilterOptions }) => {
  return (
    <StyledComboboxInput
      appliedFilterOptions={appliedFilterOptions}
      className="smdn-combobox-input"
      data-test="combobox-input-component"
    >
      <Tag>filter</Tag>
    </StyledComboboxInput>
  )
}

ComboboxInput.propTypes = {
  appliedFilterOptions: PropTypes.array.isRequired,
}

export default ComboboxInput
