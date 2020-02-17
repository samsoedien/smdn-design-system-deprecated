import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer' // eslint-disable-line
import 'jest-styled-components'

const Button = styled.button`
  color: blue;
`

test('Button snapshot works', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})
