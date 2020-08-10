import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Jumbotron from './index'

export default {
  title: 'Core/Jumbotron',
  component: Jumbotron,
  componentTitle: 'Component for user Jumbotron',
  decorators: [withKnobs],
}

export const DefaultJumbotronComponent = () => <Jumbotron>Content</Jumbotron>

DefaultJumbotronComponent.story = {
  name: 'Jumbotron - Default',
  parameters: {
    jest: ['Jumbotron.test.tsx'],
  },
}
