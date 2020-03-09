import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Card from './index'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
import Button from '../Button'

export default {
  title: 'Core/Card',
  component: Card,
  componentTitle: 'Component used as elevated container for content',
  decorators: [withKnobs],
}

export const DefaultCardComponent = () => <Card>Hello World</Card>

DefaultCardComponent.story = {
  name: 'Card - Default',
  parameters: {
    jest: ['Card.test.tsx'],
  },
}

export const GreyCardComponent = () => (
  <Card color="grey">
    <CardHeader>Header</CardHeader>
    <CardContent>Content</CardContent>
    <CardFooter>
      <Button size="small">Action</Button>
    </CardFooter>
  </Card>
)
