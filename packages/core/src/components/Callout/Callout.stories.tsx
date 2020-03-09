import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Callout from './index'

export default {
  title: 'Core/Callout',
  component: Callout,
  componentTitle: 'Callout',
  decorators: [withKnobs],
}

export const DefaultCalloutComponent = () => <Callout>Hi I am a Callout</Callout>

DefaultCalloutComponent.story = {
  name: 'Callout - Default',
  parameters: {
    jest: ['Callout.test.tsx'],
  },
}

export const InfoCalloutComponent = () => <Callout color="info">Hi I am an info Callout</Callout>

InfoCalloutComponent.story = {
  name: 'Callout - Info',
  parameters: {
    jest: ['Callout.test.tsx'],
  },
}

export const SuccessCalloutComponent = () => <Callout color="success">Hi I am a success Callout</Callout>

SuccessCalloutComponent.story = {
  name: 'Callout - Success',
  parameters: {
    jest: ['Callout.test.tsx'],
  },
}

export const WarningCalloutComponent = () => <Callout color="warning">Hi I am a Callout</Callout>

WarningCalloutComponent.story = {
  name: 'Callout - Warning',
  parameters: {
    jest: ['Callout.test.tsx'],
  },
}

export const DangerCalloutComponent = () => <Callout color="danger">Hi I am a Callout</Callout>

DangerCalloutComponent.story = {
  name: 'Callout - Danger',
  parameters: {
    jest: ['Callout.test.tsx'],
  },
}
