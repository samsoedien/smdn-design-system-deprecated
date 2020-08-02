import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Modal from './index'

export default {
  title: 'Core/Modal',
  component: Modal,
  componentTitle: 'Modal Component',
  decorators: [withKnobs],
}

export const DefaultModalComponent = () => <Modal>Modal Content</Modal>

DefaultModalComponent.story = {
  name: 'Modal - Default',
  parameters: {
    jest: ['Modal.test.tsx'],
  },
}
