import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Comment from './index'

export default {
  title: 'Components/Comment',
  component: Comment,
  componentTitle: 'Comment',
  decorators: [withKnobs],
}

export const DefaultCommentComponent = () => <Comment>Comment</Comment>

DefaultCommentComponent.story = {
  name: 'Comment - Default',
  parameters: {
    jest: ['Comment.test.tsx'],
  },
}
