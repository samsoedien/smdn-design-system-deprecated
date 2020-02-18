import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import PageFooter from './index'

export default {
  title: 'Layouts/PageFooter',
  component: PageFooter,
  componentTitle: 'Component for user or product PageFooter',
  decorators: [withKnobs],
}

export const DefaultPageFooterComponent = () => <PageFooter>Hello world</PageFooter>

DefaultPageFooterComponent.story = {
  name: 'PageFooter - Default',
  parameters: {
    jest: ['PageFooter.test.tsx'],
  },
}
