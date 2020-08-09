import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import ArrowRightIcon from '../components/ArrowRightIcon'

export default {
  title: 'Icons/ArrowRightIcon',
  component: ArrowRightIcon,
  componentTitle: 'ArrowRightIcon',
  decorators: [withKnobs],
}

export const DefaultArrowRightIconComponent = () => <ArrowRightIcon />

DefaultArrowRightIconComponent.story = {
  name: 'ArrowRightIcon - Default',
}
