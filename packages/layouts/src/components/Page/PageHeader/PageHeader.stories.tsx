import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import PageHeader from './index'

export default {
  title: 'Layouts/PageHeader',
  component: PageHeader,
  componentTitle: 'Component for user or product PageHeader',
  decorators: [withKnobs],
}

export const DefaultPageHeaderComponent = () => <PageHeader>Hello world</PageHeader>

DefaultPageHeaderComponent.story = {
  name: 'PageHeader - Default',
  parameters: {
    jest: ['PageHeader.test.tsx'],
  },
}
