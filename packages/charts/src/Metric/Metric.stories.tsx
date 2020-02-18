import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Metric from './index'

export default {
  title: 'Components/Metric',
  component: Metric,
  componentTitle: 'Component for user or product Metric',
  decorators: [withKnobs],
}

export const DefaultMetricComponent = () => <Metric />

DefaultMetricComponent.story = {
  name: 'Metric - Default',
  parameters: {
    jest: ['Metric.test.tsx'],
  },
}
