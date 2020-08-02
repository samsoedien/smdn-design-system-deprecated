import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Breadcrumbs from './index'

const breadcrumbData = [
  { label: 'home', href: '/home' },
  { label: 'projects', href: '/projects' },
  { label: 'project a', href: '/projects/1' },
]

export default {
  title: 'Core/Breadcrumbs',
  component: Breadcrumbs,
  componentTitle: 'Breadcrumbs',
  decorators: [withKnobs],
}

export const DefaultBreadcrumbsComponent = () => <Breadcrumbs breadcrumbs={breadcrumbData} />

DefaultBreadcrumbsComponent.story = {
  name: 'Breadcrumbs - Default',
  parameters: {
    jest: ['Breadcrumbs.test.tsx'],
  },
}
