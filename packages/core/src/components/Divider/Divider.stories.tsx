import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Divider from './index'
import Button from '../Button'

export default {
  title: 'Core/Divider',
  component: Divider,
  componentTitle: 'Component used as elevated container for content',
  decorators: [withKnobs],
}

export const DefaultDividerComponent = () => <Divider />

DefaultDividerComponent.story = {
  name: 'Divider - Default',
  parameters: {
    jest: ['Divider.test.tsx'],
  },
}

export const VerticalDividerComponent = () => <Divider orientation="vertical" />

VerticalDividerComponent.story = {
  name: 'Divider - Vertical',
  parameters: {
    jest: ['Divider.test.tsx'],
  },
}

export const CustomDividerComponent = () => (
  <>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Divider orientation="vertical" />
    <Button>Button 3</Button>
  </>
)

CustomDividerComponent.story = {
  name: 'Divider - Custom',
  parameters: {
    jest: ['Divider.test.tsx'],
  },
}
