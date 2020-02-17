import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTableBody = styled.tbody``

export interface ITableBodyProps {
  children: React.ReactNode
}

const TableBody: React.FC<ITableBodyProps> = ({ children }) => {
  return (
    <StyledTableBody className="smdn-table-body" data-test="table-body-component">
      {children}
    </StyledTableBody>
  )
}

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TableBody
