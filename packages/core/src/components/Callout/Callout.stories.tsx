import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Callout from './index'

export default {
  title: 'Components/Callout',
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
export const InfoCalloutComponent = () => <Callout color="info">Hi I am a Callout</Callout>
export const SuccessCalloutComponent = () => <Callout color="success">Hi I am a Callout</Callout>
export const WarningCalloutComponent = () => <Callout color="warning">Hi I am a Callout</Callout>
export const DangerCalloutComponent = () => <Callout color="danger">Hi I am a Callout</Callout>
