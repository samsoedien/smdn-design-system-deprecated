import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import ListGroup from './index'

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
  componentTitle: 'ListGroup',
  decorators: [withKnobs],
}

export const DefaultListGroupComponent = () => <ListGroup />

DefaultListGroupComponent.story = {
  name: 'ListGroup - Default',
  parameters: {
    jest: ['ListGroup.test.tsx'],
  },
}
