import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import PageSideBar from './index'

export default {
  title: 'Layouts/PageSideBar',
  component: PageSideBar,
  componentTitle: 'Component for user or product PageSideBar',
  decorators: [withKnobs],
}

export const DefaultPageSideBarComponent = () => <PageSideBar>Hello world</PageSideBar>

DefaultPageSideBarComponent.story = {
  name: 'PageSideBar - Default',
  parameters: {
    jest: ['PageSideBar.test.tsx'],
  },
}
