import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import CloseIcon from '../components/CloseIcon'

export default {
  title: 'Icons/CloseIcon',
  component: CloseIcon,
  componentTitle: 'CloseIcon',
  decorators: [withKnobs],
}

export const DefaultCloseIconComponent = () => <CloseIcon />

DefaultCloseIconComponent.story = {
  name: 'CloseIcon - Default',
}
