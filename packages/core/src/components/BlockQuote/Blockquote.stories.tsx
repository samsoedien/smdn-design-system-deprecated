import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Blockquote from './index'

export default {
  title: 'Core/Blockquote',
  component: Blockquote,
  componentTitle: 'Blockquote',
  decorators: [withKnobs],
}

export const DefaultBlockquoteComponent = () => (
  <Blockquote>This text can be used to reference text or a quote</Blockquote>
)

DefaultBlockquoteComponent.story = {
  name: 'Blockquote - Default',
  parameters: {
    jest: ['Blockquote.test.tsx'],
  },
}
