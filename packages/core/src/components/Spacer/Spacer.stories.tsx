import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Spacer from './index'

export default {
  title: 'Components/Spacer',
  component: Spacer,
  componentTitle: 'Component to provide vertical spacing/padding',
  decorators: [withKnobs],
}

export const DefaultSpacerComponent = () => <Spacer />

DefaultSpacerComponent.story = {
  name: 'Spacer - Default',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}
