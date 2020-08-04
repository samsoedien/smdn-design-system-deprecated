import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Blockquote from './index'

export default {
  title: 'Core/Blockquote',
  component: Blockquote,
  componentTitle: 'Blockquote',
  decorators: [withKnobs],
}

export const DefaultBlockquoteComponent = () => <Blockquote>this is a Blockquote</Blockquote>

DefaultBlockquoteComponent.story = {
  name: 'Blockquote - Default',
  parameters: {
    jest: ['Blockquote.test.tsx'],
  },
}

export const SuccessBlockquoteComponent = () => <Blockquote color="success">this is a Blockquote</Blockquote>

SuccessBlockquoteComponent.story = {
  name: 'Blockquote - Success',
  parameters: {
    jest: ['Blockquote.test.tsx'],
  },
}
