import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Toast from './index'

export default {
  title: 'Core/Toast',
  component: Toast,
  componentTitle: 'Toast',
  decorators: [withKnobs],
}

export const DefaultToastComponent = () => <Toast>Hello world</Toast>

DefaultToastComponent.story = {
  name: 'Toast - Default',
  parameters: {
    jest: ['Toast.test.tsx'],
  },
}
