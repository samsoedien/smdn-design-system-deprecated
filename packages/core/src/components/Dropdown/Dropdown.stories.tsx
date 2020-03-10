import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Dropdown from './index'

export default {
  title: 'Core/Dropdown',
  component: Dropdown,
  componentTitle: 'Component for user Dropdown',
  decorators: [withKnobs],
}

export const DefaultDropdownComponent = () => <Dropdown />

DefaultDropdownComponent.story = {
  name: 'Dropdown - Default',
  parameters: {
    jest: ['Dropdown.test.tsx'],
  },
}
