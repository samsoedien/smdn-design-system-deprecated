import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Chart from './index'

export default {
  title: 'Charts/Chart',
  component: Chart,
  componentTitle: 'Chart',
  decorators: [withKnobs],
}

export const DefaultChartComponent = () => <Chart />

DefaultChartComponent.story = {
  name: 'Chart - Default',
  parameters: {
    jest: ['Chart.test.tsx'],
  },
}
