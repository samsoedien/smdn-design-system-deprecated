import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTableHead = styled.thead``

export interface ITableHeadProps {
  children: React.ReactNode
}

const TableHead: React.FC<ITableHeadProps> = ({ children }) => {
  return (
    <StyledTableHead className="smnd-table-heade" data-test="table-head-component">
      {children}
    </StyledTableHead>
  )
}

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TableHead
