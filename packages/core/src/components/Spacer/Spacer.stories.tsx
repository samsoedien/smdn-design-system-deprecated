import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Spacer from './index'

export default {
  title: 'Core/Spacer',
  component: Spacer,
  componentTitle: 'Component to provide vertical spacing/padding',
  decorators: [withKnobs],
}

export const DefaultSpacerComponent = () => <Spacer />

DefaultSpacerComponent.story = {
  name: 'Spacer - Default',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}

export const XxSmallSpacerComponent = () => <Spacer size="xx-small" />

XxSmallSpacerComponent.story = {
  name: 'Spacer - XX-Small',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}

export const XSmallSpacerComponent = () => <Spacer size="x-small" />

XSmallSpacerComponent.story = {
  name: 'Spacer - X-Small',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}

export const SmallSpacerComponent = () => <Spacer size="small" />

SmallSpacerComponent.story = {
  name: 'Spacer - Small',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}

export const MediumSpacerComponent = () => <Spacer size="medium" />

MediumSpacerComponent.story = {
  name: 'Spacer - Medium',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}

export const LargeSpacerComponent = () => <Spacer size="large" />

LargeSpacerComponent.story = {
  name: 'Spacer - Large',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}

export const XLargeSpacerComponent = () => <Spacer size="x-large" />

XLargeSpacerComponent.story = {
  name: 'Spacer - X-Large',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}

export const XxLargeSpacerComponent = () => <Spacer size="xx-large" />

XxLargeSpacerComponent.story = {
  name: 'Spacer - XX-Large',
  parameters: {
    jest: ['Spacer.test.tsx'],
  },
}
