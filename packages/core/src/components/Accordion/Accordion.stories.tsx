import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Accordion from './index'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  componentTitle: 'Accordion',
  decorators: [withKnobs],
}

export const DefaultAccordionComponent = () => <Accordion>Accordion</Accordion>

DefaultAccordionComponent.story = {
  name: 'Accordion - Default',
  parameters: {
    jest: ['Accordion.test.tsx'],
  },
}
