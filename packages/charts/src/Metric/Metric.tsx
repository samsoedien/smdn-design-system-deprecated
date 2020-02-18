import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMetric = styled.div``

export interface IMetricProps {
  value?: number
  unit?: string
}

const Metric: React.FC<IMetricProps> = ({ value, unit }) => {
  return (
    <StyledMetric className="smdn-metric" data-test="metric-component">
      {value ? (
        <span>
          {value} {unit}
        </span>
      ) : (
        <span>--</span>
      )}
    </StyledMetric>
  )
}

Metric.defaultProps = {
  value: undefined,
  unit: undefined,
}

Metric.propTypes = {
  value: PropTypes.number,
  unit: PropTypes.string,
}

export default Metric
