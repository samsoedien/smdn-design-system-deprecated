import React, { useState, ChangeEvent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05, TokenColorPaletteGrey10 } from '@smdn/tokens'

const StyledRange = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
`

const StyledRangeLabel = styled.label`
  display: block;
`
const StyledRangeInput = styled.input`
  appearance: none;
  width: 100%;
  height: 6px;
  background-color: ${TokenColorPaletteGrey05};
  outline: none;
  opacity: 0.7;
  transition: 0.2s;
  &:hover {
    background-color: ${TokenColorPaletteGrey10};
  }

  &::-webkit-slider-thumb,
  &::-moz-range-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    background-color: blue;
    border-radius: 50%;
    cursor: pointer;
  }
`

const StyledInput = styled.input`
  margin-left: 6px;
  width: 30px;
  border: none;
  background-color: ${TokenColorPaletteGrey05};
  height: 30px;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`

export interface IRangeProps {
  label: string
  min?: number
  max?: number
  step?: number
  showInputs?: boolean
}

const Range: React.FC<IRangeProps> = ({ label, min, max, step, showInputs }) => {
  const [rangeValue, setRangeValue] = useState<number>(max! / 2)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const convertedValue = parseInt(e.target.value, 10)
    setRangeValue(convertedValue)
  }

  return (
    <StyledRange className="smdn-range" data-test="range-component">
      <StyledRangeLabel>{label}</StyledRangeLabel>
      <StyledRangeInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={rangeValue}
        onChange={(e) => handleChange(e)}
      />
      {showInputs && <StyledInput type="text" value={rangeValue} onChange={(e) => handleChange(e)} />}
    </StyledRange>
  )
}

Range.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  showInputs: false,
}

Range.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  showInputs: PropTypes.bool,
}

export default Range
