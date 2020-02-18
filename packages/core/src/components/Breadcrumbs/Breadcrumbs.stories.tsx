import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Breadcrumbs from './index'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  componentTitle: 'Breadcrumbs',
  decorators: [withKnobs],
}

export const DefaultBreadcrumbsComponent = () => <Breadcrumbs />

DefaultBreadcrumbsComponent.story = {
  name: 'Breadcrumbs - Default',
  parameters: {
    jest: ['Breadcrumbs.test.tsx'],
  },
}
