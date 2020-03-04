import React from 'react'
import { action } from '@storybook/addon-actions' // eslint-disable-line
import { withKnobs, text, boolean } from '@storybook/addon-knobs' // eslint-disable-line

import Button from './index'

export default {
  title: 'Components/Button',
  component: Button,
  componentTitle: 'Basic buttons to provide the user with an action when user interaction is required.',
  decorators: [withKnobs],
}

export const ButtonComponents = () => (
  <>
    <Button appearance="primary" onClick={action('button action click')}>
      Primary
    </Button>
    <Button appearance="secondary" onClick={action('button action click')}>
      Secondary
    </Button>
    <Button appearance="tertiary" onClick={action('button action click')}>
      Tertiary
    </Button>
  </>
)

ButtonComponents.story = {
  name: 'Buttons',
  parameters: {
    jest: ['Button.test.tsx', 'Button.snapshot.test.tsx'],
    // jest: { disable: true },
  },
}

export const ButtonSizes = () => (
  <>
    <Button size="small">Small</Button>
    <Button size="regular">Regular</Button>
    <Button size="large">Large</Button>
  </>
)

ButtonSizes.story = {
  name: 'Button - Sizes',
}

export const DefaultButtonComponent = () => (
  <Button onClick={action('clicked')}>{text('label', 'Default Button')}</Button>
)

DefaultButtonComponent.story = {
  name: 'Button - Default',
}

export const PrimaryButtonComponent = () => <Button appearance="primary">Primary Button</Button>

PrimaryButtonComponent.story = {
  name: 'Button - Primary',
}

export const SecondaryButtonComponent = () => <Button appearance="secondary">Secondary Button</Button>

SecondaryButtonComponent.story = {
  name: 'Button - Secondary',
}

export const TertiaryButtonComponent = () => <Button appearance="tertiary">Tertiary Button</Button>

TertiaryButtonComponent.story = {
  name: 'Button - Tertiary',
}

export const LoadingButton = () => <Button isLoading={boolean('loading', true)}>Loading...</Button>

LoadingButton.story = {
  name: 'Button - Loading',
}

export const DisabledButton = () => <Button disabled>Disabled</Button>

DisabledButton.story = {
  name: 'Button - Disabled',
}
