import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Dropdown from './index'

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
