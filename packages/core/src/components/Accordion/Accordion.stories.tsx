import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Accordion from './index'

export default {
  title: 'Core/Accordion',
  component: Accordion,
  componentTitle: 'Accordion',
  decorators: [withKnobs],
}

export const DefaultAccordionComponent = () => (
  <Accordion>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Accordion>
)

DefaultAccordionComponent.story = {
  name: 'Accordion - Default',
  parameters: {
    jest: ['Accordion.test.tsx'],
  },
}
