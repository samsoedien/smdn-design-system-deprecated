import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Banner from './index'

export default {
  title: 'Core/Banner',
  component: Banner,
  componentTitle: 'Banner',
  decorators: [withKnobs],
}

export const DefaultBannerComponent = () => <Banner>Banner Content</Banner>

DefaultBannerComponent.story = {
  name: 'Banner - Default',
  parameters: {
    jest: ['Banner.test.tsx'],
  },
}

export const WarningBannerComponent = () => <Banner color="warning">Banner Content</Banner>

WarningBannerComponent.story = {
  name: 'Banner - Warning',
  parameters: {
    jest: ['Banner.test.tsx'],
  },
}

export const CenteredTextBannerComponent = () => <Banner centerText>Banner Content</Banner>

CenteredTextBannerComponent.story = {
  name: 'Banner - CenteredText',
  parameters: {
    jest: ['Banner.test.tsx'],
  },
}
