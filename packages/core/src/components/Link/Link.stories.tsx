import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Link from './index'

export default {
  title: 'Core/Link',
  component: Link,
  componentTitle: 'Component for user Link',
  decorators: [withKnobs],
}

export const DefaultLinkComponent = () => <Link href="/">Link</Link>

DefaultLinkComponent.story = {
  name: 'Link - Default',
  parameters: {
    jest: ['Link.test.tsx'],
  },
}

export const DisabledLinkComponent = () => (
  <Link href="/" disabled>
    Link
  </Link>
)

DisabledLinkComponent.story = {
  name: 'Link - Disabled',
  parameters: {
    jest: ['Link.test.tsx'],
  },
}

export const OpenNewTabLinkComponent = () => (
  <Link href="/" openNewTab>
    Link
  </Link>
)

OpenNewTabLinkComponent.story = {
  name: 'Link - Open New Tab',
  parameters: {
    jest: ['Link.test.tsx'],
  },
}
