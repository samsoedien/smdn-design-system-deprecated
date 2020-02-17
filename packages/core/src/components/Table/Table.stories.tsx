import React from 'react'
import { withKnobs } from '@storybook/addon-knobs' // eslint-disable-line

import Table from './index'
import TableHead from './TableHead'
import TableRow from './TableRow'
import TableCell from './TableCell'
import TableBody from './TableBody'

export default {
  title: 'Components/Table',
  component: Table,
  componentTitle: 'Table',
  decorators: [withKnobs],
}

export const DefaultTableComponent = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell tableHead>Heading 1</TableCell>
        <TableCell tableHead>Heading 2</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Body 1</TableCell>
        <TableCell>Body 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Body 3</TableCell>
        <TableCell>Body 4</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

DefaultTableComponent.story = {
  name: 'Table - Default',
  parameters: {
    jest: ['Table.test.tsx'],
  },
}
