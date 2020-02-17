import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Avatar from './index'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  componentTitle: 'Component for user or product avatar',
  decorators: [withKnobs],
}

export const DefaultAvatarComponent = () => <Avatar name="John" />

DefaultAvatarComponent.story = {
  name: 'Avatar - Default',
  parameters: {
    jest: ['Avatar.test.tsx'],
  },
}
