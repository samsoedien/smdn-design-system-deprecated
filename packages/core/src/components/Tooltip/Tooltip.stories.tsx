import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Tooltip from './index'

export default {
  title: 'Core/Tooltip',
  component: Tooltip,
  componentTitle: 'Tooltip',
  decorators: [withKnobs],
}

export const DefaultTooltipComponent = () => (
  <Tooltip tooltipText="hello world">
    <button type="button">Hello</button>
  </Tooltip>
)

DefaultTooltipComponent.story = {
  name: 'Tooltip - Default',
  parameters: {
    jest: ['Tooltip.test.tsx'],
  },
}
