import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTableCellHead = styled.th``
const StyledTableCell = styled.td``

export interface ITableCellProps {
  tableHead?: boolean
  children: React.ReactNode
}

const TableCell: React.FC<ITableCellProps> = ({ children, tableHead }) => {
  const tableCell = tableHead ? (
    <StyledTableCellHead className="smdn-table-cell" data-test="table-cell-component">
      {children}
    </StyledTableCellHead>
  ) : (
    <StyledTableCell className="smdn-table-cell" data-test="table-cell-component">
      {children}
    </StyledTableCell>
  )

  return tableCell
}

TableCell.defaultProps = {
  tableHead: false,
}

TableCell.propTypes = {
  tableHead: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default TableCell
