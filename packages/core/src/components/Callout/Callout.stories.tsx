import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Callout from './index'

export default {
  title: 'Components/Callout',
  component: Callout,
  componentTitle: 'Callout',
  decorators: [withKnobs],
}

export const DefaultCalloutComponent = () => <Callout>Hello world</Callout>

DefaultCalloutComponent.story = {
  name: 'Callout - Default',
  parameters: {
    jest: ['Callout.test.tsx'],
  },
}
