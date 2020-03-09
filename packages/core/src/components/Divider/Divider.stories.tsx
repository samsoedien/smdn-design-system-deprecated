import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Divider from './index'

export default {
  title: 'Core/Divider',
  component: Divider,
  componentTitle: 'Component used as elevated container for content',
  decorators: [withKnobs],
}

export const DefaultDividerComponent = () => <Divider />

DefaultDividerComponent.story = {
  name: 'Divider - Default',
  parameters: {
    jest: ['Divider.test.tsx'],
  },
}
