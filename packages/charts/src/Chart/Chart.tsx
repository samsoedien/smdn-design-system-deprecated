import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledChart = styled.canvas<IChartProps>``

export type ChartType = 'areaseries' | 'barseries' | 'lineseries'

export interface IChartProps {
  type?: ChartType
}

const Chart: React.FC<IChartProps> = ({ type }) => {
  return <StyledChart type={type} className="smdn-chart" data-test="chart-component" />
}

Chart.defaultProps = {
  type: 'lineseries',
}

Chart.propTypes = {
  type: PropTypes.oneOf<ChartType>(['areaseries', 'barseries', 'lineseries']),
}

export default Chart
