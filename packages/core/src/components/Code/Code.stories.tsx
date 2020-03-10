import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Code from './index'

export default {
  title: 'Core/Code',
  component: Code,
  componentTitle: 'Code',
  decorators: [withKnobs],
}

export const DefaultCodeComponent = () => <Code>Code</Code>

DefaultCodeComponent.story = {
  name: 'Code - Default',
  parameters: {
    jest: ['Code.test.tsx'],
  },
}
