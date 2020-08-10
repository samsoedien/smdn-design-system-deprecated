import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Accordion from './index'

export default {
  title: 'Core/Accordion',
  component: Accordion,
  componentTitle: 'Accordion',
  decorators: [withKnobs],
}

export const DefaultAccordionComponent = () => <Accordion />

DefaultAccordionComponent.story = {
  name: 'Accordion - Default',
  parameters: {
    jest: ['Accordion.test.tsx'],
  },
}

export const ToggleAccordionComponent = () => <Accordion allowMultipleOpen={false} />

ToggleAccordionComponent.story = {
  name: 'Accordion - Toggle',
  parameters: {
    jest: ['Accordion.test.tsx'],
  },
}
