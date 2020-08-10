import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Dropdown from './index'

import Menu from '../Menu'
import MenuItem from '../Menu/MenuItem'
import MenuSeparator from '../Menu/MenuSeparator'

const dropdownData = [
  {
    label: 'action',
    href: '/action',
  },
  {
    label: 'another action',
    href: '/another action',
  },
  {
    label: 'hi there',
    href: '/hi',
  },
]

export default {
  title: 'Core/Dropdown',
  component: Dropdown,
  componentTitle: 'Component for user Dropdown',
  decorators: [withKnobs],
}

export const DefaultDropdownComponent = () => <Dropdown buttonLabel="dropdown" dropdownItems={dropdownData} />

DefaultDropdownComponent.story = {
  name: 'Dropdown - Default',
  parameters: {
    jest: ['Dropdown.test.tsx'],
  },
}
export const MenuDropdownComponent = () => (
  <Dropdown>
    <Menu>
      <MenuItem>Account</MenuItem>
      <MenuSeparator />
      <MenuItem>Settings</MenuItem>
      <MenuItem>Log Out</MenuItem>
    </Menu>
  </Dropdown>
)

MenuDropdownComponent.story = {
  name: 'Dropdown - Menu',
  parameters: {
    jest: ['Dropdown.test.tsx'],
  },
}
