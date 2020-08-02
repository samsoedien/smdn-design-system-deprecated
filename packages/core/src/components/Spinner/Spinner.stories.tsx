import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Spinner from './index'

export default {
  title: 'Core/Spinner',
  component: Spinner,
  componentTitle: 'Spinner Component',
  decorators: [withKnobs],
}

export const DefaultSpinnerComponent = () => <Spinner />

DefaultSpinnerComponent.story = {
  name: 'Spinner - Default',
  parameters: {
    jest: ['Spinner.test.tsx'],
  },
}

export const SmallSpinnerComponent = () => <Spinner size="small" />

SmallSpinnerComponent.story = {
  name: 'Spinner - Small',
  parameters: {
    jest: ['Spinner.test.tsx'],
  },
}

export const LargeSpinnerComponent = () => <Spinner size="large" />

LargeSpinnerComponent.story = {
  name: 'Spinner - Large',
  parameters: {
    jest: ['Spinner.test.tsx'],
  },
}

export const LoadingTextSpinnerComponent = () => <Spinner loadingText="fetching products..." />

LoadingTextSpinnerComponent.story = {
  name: 'Spinner - Loading Text',
  parameters: {
    jest: ['Spinner.test.tsx'],
  },
}
