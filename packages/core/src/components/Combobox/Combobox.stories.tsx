import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Combobox from './index'

export default {
  title: 'Components/Combobox',
  component: Combobox,
  componentTitle: 'Combobox',
  decorators: [withKnobs],
}

export const DefaultComboboxComponent = () => <Combobox />

DefaultComboboxComponent.story = {
  name: 'Combobox - Default',
  parameters: {
    jest: ['Combobox.test.tsx'],
  },
}
