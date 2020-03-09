import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Input from './index'

export default {
  title: 'Core/Input',
  component: Input,
  componentTitle: 'Component for user input',
  decorators: [withKnobs],
}

export const DefaultInputComponent = () => (
  <Input name="name" placeholder="Type Something..." onChange={(e: any) => console.log(e)} />
)

DefaultInputComponent.story = {
  name: 'Input - Default',
  parameters: {
    jest: ['Input.test.tsx'],
  },
}
