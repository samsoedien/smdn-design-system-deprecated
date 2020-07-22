import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Select from './index'

export default {
  title: 'Core/Select',
  component: Select,
  componentTitle: 'Component for user Select',
  decorators: [withKnobs],
}

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

// const options2 = ['hello', 'world']

export const DefaultSelectComponent = () => <Select options={options} />

DefaultSelectComponent.story = {
  name: 'Select - Default',
  parameters: {
    jest: ['Select.test.tsx'],
  },
}
