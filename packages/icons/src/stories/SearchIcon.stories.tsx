import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import SearchIcon from '../components/SearchIcon'

export default {
  title: 'Icons/SearchIcon',
  component: SearchIcon,
  componentTitle: 'SearchIcon',
  decorators: [withKnobs],
}

export const DefaultSearchIconComponent = () => <SearchIcon />

DefaultSearchIconComponent.story = {
  name: 'SearchIcon - Default',
}
