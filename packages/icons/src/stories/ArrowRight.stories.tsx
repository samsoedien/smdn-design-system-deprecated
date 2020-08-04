import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import ArrowRight from '../components/ArrowRight'

export default {
  title: 'Icons/ArrowRight',
  component: ArrowRight,
  componentTitle: 'ArrowRight',
  decorators: [withKnobs],
}

export const DefaultArrowRightComponent = () => <ArrowRight />

DefaultArrowRightComponent.story = {
  name: 'ArrowRight - Default',
  parameters: {
    jest: ['ArrowRight.test.tsx'],
  },
}
