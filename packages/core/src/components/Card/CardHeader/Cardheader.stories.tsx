import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import CardHeader from './index'

export default {
  title: 'Components/CardHeader',
  component: CardHeader,
  componentTitle: 'Component used as elevated container for content',
  decorators: [withKnobs],
}

export const DefaultCardHeaderComponent = () => <CardHeader>Hello World</CardHeader>

DefaultCardHeaderComponent.story = {
  name: 'Card Header - Default',
  parameters: {
    jest: ['CardHeader.test.tsx'],
  },
}
