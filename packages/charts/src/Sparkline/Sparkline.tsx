import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Metric from '../Metric'

const StyledSparkline = styled.div`
  display: flex;
`

export interface ISparklineProps {
  heading: string
  value?: number
  unit?: string
}

const Sparkline: React.FC<ISparklineProps> = ({ heading, value, unit }) => {
  return (
    <StyledSparkline>
      <div>{heading}</div>
      <Metric value={value} unit={unit} />
    </StyledSparkline>
  )
}

Sparkline.defaultProps = {
  value: undefined,
  unit: undefined,
}

Sparkline.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string,
}

export default Sparkline
