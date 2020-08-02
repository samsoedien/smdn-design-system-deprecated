import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Alert from './index'

export default {
  title: 'Core/Alert',
  component: Alert,
  componentTitle: 'Alert Component',
  decorators: [withKnobs],
}

export const DefaultAlertComponent = () => <Alert>Alert Message</Alert>

DefaultAlertComponent.story = {
  name: 'Alert - Default',
  parameters: {
    jest: ['Alert.test.tsx'],
  },
}

export const PrimaryAlertComponent = () => <Alert color="primary">Alert Message</Alert>

PrimaryAlertComponent.story = {
  name: 'Alert - Primary',
  parameters: {
    jest: ['Alert.test.tsx'],
  },
}

export const ClosableAlertComponent = () => <Alert isClosable>Alert Message</Alert>

ClosableAlertComponent.story = {
  name: 'Alert - Closable',
  parameters: {
    jest: ['Alert.test.tsx'],
  },
}
