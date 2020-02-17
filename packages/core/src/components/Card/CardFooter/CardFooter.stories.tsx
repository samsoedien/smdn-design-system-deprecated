import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import CardFooter from './index'

export default {
  title: 'Components/CardFooter',
  component: CardFooter,
  componentTitle: 'Component used as elevated container for content',
  decorators: [withKnobs],
}

export const DefaultCardFooterComponent = () => <CardFooter>Hello World</CardFooter>

DefaultCardFooterComponent.story = {
  name: 'Card Footer - Default',
  parameters: {
    jest: ['CardFooter.test.tsx'],
  },
}
