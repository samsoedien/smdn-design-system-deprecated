import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import HeroBanner from './index'

export default {
  title: 'Layouts/HeroBanner',
  component: HeroBanner,
  componentTitle: 'Component for user or product HeroBanner',
  decorators: [withKnobs],
}

export const DefaultHeroBannerComponent = () => <HeroBanner>Hello world</HeroBanner>

DefaultHeroBannerComponent.story = {
  name: 'HeroBanner - Default',
  parameters: {
    jest: ['HeroBanner.test.tsx'],
  },
}
