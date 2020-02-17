import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  overflow: auto;
  table-layout: fixed;
`

export interface ITableProps {
  children: React.ReactNode
}

const Table: React.FC<ITableProps> = ({ children }) => {
  return (
    <StyledTable className="smdn-table" data-test="table-component">
      {children}
    </StyledTable>
  )
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Table
