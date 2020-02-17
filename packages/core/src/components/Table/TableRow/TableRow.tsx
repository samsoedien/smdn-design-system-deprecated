import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTableRow = styled.tr``

export interface ITableRowProps {
  children: React.ReactNode
}

const TableRow: React.FC<ITableRowProps> = ({ children }) => {
  return (
    <StyledTableRow className="smdn-table-row" data-test="table-row-component">
      {children}
    </StyledTableRow>
  )
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TableRow
