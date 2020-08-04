import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import ArrowLeft from '../components/ArrowLeft'

export default {
  title: 'Icons/ArrowLeft',
  component: ArrowLeft,
  componentTitle: 'ArrowLeft',
  decorators: [withKnobs],
}

export const DefaultArrowLeftComponent = () => <ArrowLeft />

DefaultArrowLeftComponent.story = {
  name: 'ArrowLeft - Default',
  parameters: {
    jest: ['ArrowLeft.test.tsx'],
  },
}
