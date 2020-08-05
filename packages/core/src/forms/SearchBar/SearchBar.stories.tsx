import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import SearchBar from './index'

export default {
  title: 'Core/SearchBar',
  component: SearchBar,
  componentTitle: 'SearchBar Component',
  decorators: [withKnobs],
}

export const DefaultSearchBarComponent = () => (
  <SearchBar handleSubmitCallback={(searchValue) => console.log(searchValue)} />
)

DefaultSearchBarComponent.story = {
  name: 'SearchBar - Default',
  parameters: {
    jest: ['SearchBar.test.tsx'],
  },
}
