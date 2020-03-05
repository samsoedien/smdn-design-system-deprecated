import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Dashboard from './index'

export default {
  title: 'Layouts/Dashboard',
  component: Dashboard,
  componentTitle: 'Component for user or product Dashboard',
  decorators: [withKnobs],
}

export const DefaultDashboardComponent = () => <Dashboard>Dashboard</Dashboard>

DefaultDashboardComponent.story = {
  name: 'Dashboard - Default',
  parameters: {
    jest: ['Dashboard.test.tsx'],
  },
}
