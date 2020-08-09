import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import ArrowLeftIcon from '../components/ArrowLeftIcon'

export default {
  title: 'Icons/ArrowLeftIcon',
  component: ArrowLeftIcon,
  componentTitle: 'ArrowLeftIcon',
  decorators: [withKnobs],
}

export const DefaultArrowLeftIconComponent = () => <ArrowLeftIcon />

DefaultArrowLeftIconComponent.story = {
  name: 'ArrowLeftIcon - Default',
}
