import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Badge from './index'

export default {
  title: 'Core/Badge',
  component: Badge,
  componentTitle: 'Badge',
  decorators: [withKnobs],
}

export const DefaultBadgeComponent = () => <Badge>Badge Label</Badge>

DefaultBadgeComponent.story = {
  name: 'Badge - Default',
  parameters: {
    jest: ['Badge.test.tsx'],
  },
}

export const RoundedBadgeComponent = () => <Badge rounded>Badge Label</Badge>

RoundedBadgeComponent.story = {
  name: 'Badge - Rounded',
  parameters: {
    jest: ['Badge.test.tsx'],
  },
}

export const MultipleBadgeComponent = () => (
  <>
    <Badge rounded>Badge Label</Badge>
    <Badge rounded>Badge Label</Badge>
    <Badge rounded>Badge Label</Badge>
  </>
)

MultipleBadgeComponent.story = {
  name: 'Badge - Multiple',
  parameters: {
    jest: ['Badge.test.tsx'],
  },
}
