import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Tag from './index'

export default {
  title: 'Components/Tag',
  component: Tag,
  componentTitle: 'Component for adding small color accented labels',
  decorators: [withKnobs],
}

export const DefaultTagComponent = () => <Tag>Hello World</Tag>

DefaultTagComponent.story = {
  name: 'Tag - Default',
  parameters: {
    jest: ['Tag.test.tsx'],
  },
}
