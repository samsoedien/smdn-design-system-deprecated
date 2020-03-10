import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Dialog from './index'

export default {
  title: 'Core/Dialog',
  component: Dialog,
  componentTitle: 'Dialog',
  decorators: [withKnobs],
}

export const DefaultDialogComponent = () => <Dialog>Dialog</Dialog>

DefaultDialogComponent.story = {
  name: 'Dialog - Default',
  parameters: {
    jest: ['Dialog.test.tsx'],
  },
}
