import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Tabs from './index'

export default {
  title: 'Core/Tabs',
  component: Tabs,
  componentTitle: 'Tabs',
  decorators: [withKnobs],
}

export const DefaultTabsComponent = () => <Tabs>Tabs</Tabs>

DefaultTabsComponent.story = {
  name: 'Tabs - Default',
  parameters: {
    jest: ['Tabs.test.tsx'],
  },
}
