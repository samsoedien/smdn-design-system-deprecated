import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Avatar from './index'

export default {
  title: 'Core/Avatar',
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

export const UserAvatarComponent = () => <Avatar type="user" name="John" />

UserAvatarComponent.story = {
  name: 'Avatar - User',
  parameters: {
    jest: ['Avatar.test.tsx'],
  },
}

export const ProductAvatarComponent = () => <Avatar type="product" name="John" />

ProductAvatarComponent.story = {
  name: 'Avatar - Product',
  parameters: {
    jest: ['Avatar.test.tsx'],
  },
}
