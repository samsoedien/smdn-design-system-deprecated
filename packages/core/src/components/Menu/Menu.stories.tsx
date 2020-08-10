import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Menu from './index'
import MenuItem from './MenuItem'
import MenuSeparator from './MenuSeparator'

export default {
  title: 'Core/Menu',
  component: Menu,
  componentTitle: 'Menu',
  decorators: [withKnobs],
}

export const DefaultMenuComponent = () => (
  <Menu>
    <MenuItem>Account</MenuItem>
    <MenuItem>Log Out</MenuItem>
  </Menu>
)

DefaultMenuComponent.story = {
  name: 'Menu - Default',
  parameters: {
    jest: ['Menu.test.tsx'],
  },
}

export const LargeMenuComponent = () => (
  <Menu>
    <MenuItem>Products</MenuItem>
    <MenuItem>Blogs</MenuItem>
    <MenuItem disabled>Journeys</MenuItem>
    <MenuSeparator />
    <MenuItem>Account</MenuItem>
    <MenuItem>Log Out</MenuItem>
  </Menu>
)

LargeMenuComponent.story = {
  name: 'Menu - Large',
  parameters: {
    jest: ['Menu.test.tsx'],
  },
}
