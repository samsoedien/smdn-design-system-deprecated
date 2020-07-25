import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Page from './index'
import PageSideBar from './PageSideBar'
import PageContent from './PageContent'

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

export const PageWithSideBarComponent = () => (
  <Page>
    <PageSideBar>Side bar</PageSideBar>
    <PageContent>Content</PageContent>
  </Page>
)

PageWithSideBarComponent.story = {
  name: 'Page - With SideBar',
  parameters: {
    jest: ['Page.test.tsx'],
  },
}
