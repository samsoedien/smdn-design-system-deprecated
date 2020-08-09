import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import ChevronDownIcon from '../components/ChevronDownIcon'

export default {
  title: 'Icons/ChevronDownIcon',
  component: ChevronDownIcon,
  componentTitle: 'ChevronDownIcon',
  decorators: [withKnobs],
}

export const DefaultChevronDownIconComponent = () => <ChevronDownIcon />

DefaultChevronDownIconComponent.story = {
  name: 'ChevronDownIcon - Default',
}
