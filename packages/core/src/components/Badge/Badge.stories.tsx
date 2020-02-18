import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Badge from './index'

export default {
  title: 'Components/Badge',
  component: Badge,
  componentTitle: 'Badge',
  decorators: [withKnobs],
}

export const DefaultBadgeComponent = () => <Badge />

DefaultBadgeComponent.story = {
  name: 'Badge - Default',
  parameters: {
    jest: ['Badge.test.tsx'],
  },
}
