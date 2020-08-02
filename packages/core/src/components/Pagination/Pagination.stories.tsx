import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Pagination from './index'

export default {
  title: 'Core/Pagination',
  component: Pagination,
  componentTitle: 'Pagination Component',
  decorators: [withKnobs],
}

export const DefaultPaginationComponent = () => <Pagination pageCount={8} />

DefaultPaginationComponent.story = {
  name: 'Pagination - Default',
  parameters: {
    jest: ['Pagination.test.tsx'],
  },
}

export const CompressedPaginationComponent = () => <Pagination pageCount={3} compressed />

CompressedPaginationComponent.story = {
  name: 'Pagination - Compressed',
  parameters: {
    jest: ['Pagination.test.tsx'],
  },
}
