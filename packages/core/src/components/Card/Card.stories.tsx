import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Card from './index'

export default {
  title: 'Components/Card',
  component: Card,
  componentTitle: 'Component used as elevated container for content',
  decorators: [withKnobs],
}

export const DefaultCardComponent = () => <Card>Hello World</Card>

DefaultCardComponent.story = {
  name: 'Card - Default',
  parameters: {
    jest: ['Card.test.tsx'],
  },
}
