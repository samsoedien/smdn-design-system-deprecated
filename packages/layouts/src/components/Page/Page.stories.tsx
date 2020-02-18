import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Page from './index'

export default {
  title: 'Layouts/Page',
  component: Page,
  componentTitle: 'Component for user or product Page',
  decorators: [withKnobs],
}

export const DefaultPageComponent = () => <Page>Hello world</Page>

DefaultPageComponent.story = {
  name: 'Page - Default',
  parameters: {
    jest: ['Page.test.tsx'],
  },
}
