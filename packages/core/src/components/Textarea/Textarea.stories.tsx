import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Textarea from './index'

export default {
  title: 'Core/Textarea',
  component: Textarea,
  componentTitle: 'Component for user input',
  decorators: [withKnobs],
}

export const DefaultTextareaComponent = () => (
  <Textarea name="name" onChange={(e: any) => console.log(e)}>
    Hello world
  </Textarea>
)

DefaultTextareaComponent.story = {
  name: 'Textarea - Default',
  parameters: {
    jest: ['Textarea.test.tsx'],
  },
}
