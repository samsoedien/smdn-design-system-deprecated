import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Range from './index'

export default {
  title: 'Core/Range',
  component: Range,
  componentTitle: 'Range Component',
  decorators: [withKnobs],
}

export const DefaultRangeComponent = () => <Range label="Range Label" />

DefaultRangeComponent.story = {
  name: 'Range - Default',
  parameters: {
    jest: ['Range.test.tsx'],
  },
}

export const CustomStepsRangeComponent = () => <Range label="Range Label" min={0} max={4} step={0.5} />

CustomStepsRangeComponent.story = {
  name: 'Range - Custom Steps',
  parameters: {
    jest: ['Range.test.tsx'],
  },
}

export const ShowInputsRangeComponent = () => <Range label="Range Label" showInputs />

ShowInputsRangeComponent.story = {
  name: 'Range - Show Inputs',
  parameters: {
    jest: ['Range.test.tsx'],
  },
}
