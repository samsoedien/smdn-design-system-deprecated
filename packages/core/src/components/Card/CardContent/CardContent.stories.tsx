import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import CardContent from './index'

export default {
  title: 'Components/CardContent',
  component: CardContent,
  componentTitle: 'Component used as elevated container for content',
  decorators: [withKnobs],
}

export const DefaultCardContentComponent = () => <CardContent>Hello World</CardContent>

DefaultCardContentComponent.story = {
  name: 'Card Content - Default',
  parameters: {
    jest: ['CardContent.test.tsx'],
  },
}
