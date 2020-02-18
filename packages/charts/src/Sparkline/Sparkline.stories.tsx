import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Sparkline from './index'

export default {
  title: 'Components/Sparkline',
  component: Sparkline,
  componentTitle: 'Component for user or product Sparkline',
  decorators: [withKnobs],
}

export const DefaultSparklineComponent = () => <Sparkline heading="summary" />

DefaultSparklineComponent.story = {
  name: 'Sparkline - Default',
  parameters: {
    jest: ['Sparkline.test.tsx'],
  },
}
