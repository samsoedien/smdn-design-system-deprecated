import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import PageContent from './index'

export default {
  title: 'Layouts/PageContent',
  component: PageContent,
  componentTitle: 'Component for user or product PageContent',
  decorators: [withKnobs],
}

export const DefaultPageContentComponent = () => <PageContent>Hello world</PageContent>

DefaultPageContentComponent.story = {
  name: 'PageContent - Default',
  parameters: {
    jest: ['PageContent.test.tsx'],
  },
}
