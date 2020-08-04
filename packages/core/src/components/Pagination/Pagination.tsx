import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { TokenColorPaletteGrey05, TokenSpacingSmall } from '@smdn/tokens'

const StyledPagination = styled.nav`
  user-select: none;
`

const StyledPaginationList = styled.ul`
  list-style-type: none;
`

const StyledPaginationItem = styled.li<any>`
  border: 1px solid grey;
  display: inline-block;
  padding: ${TokenSpacingSmall};

  &:hover {
    background-color: ${TokenColorPaletteGrey05};
  }

  ${(props) =>
    props.active &&
    css`
      background-color: lightblue;
    `}
`

const StyledPaginationLink = styled.a`
  /* width: 100%;
  height: 100%; */
`

export interface IPaginationProps {
  pageCount: number
  compressed?: boolean
}

const Pagination: React.FC<IPaginationProps> = ({ pageCount, compressed }) => {
  const [activePage, setActivePage] = useState<number>(2)
  return (
    <StyledPagination aria-label="Page navigation" className="smdn-pagination" data-test="pagination-component">
      <StyledPaginationList>
        <StyledPaginationItem>
          <StyledPaginationLink onClick={() => setActivePage(activePage - 1)} href="#">
            {compressed ? <span>&laquo;</span> : 'Previous'}
          </StyledPaginationLink>
        </StyledPaginationItem>
        {[...Array(pageCount)].map((_, index) => (
          <StyledPaginationItem key={index} active={index + 1 === activePage}>
            <StyledPaginationLink onClick={() => setActivePage(index + 1)} href="#">
              {index + 1}
            </StyledPaginationLink>
          </StyledPaginationItem>
        ))}
        <StyledPaginationItem>
          <StyledPaginationLink onClick={() => setActivePage(activePage + 1)} href="#">
            {compressed ? <span>&raquo;</span> : 'Next'}
          </StyledPaginationLink>
        </StyledPaginationItem>
      </StyledPaginationList>
    </StyledPagination>
  )
}

Pagination.defaultProps = {
  compressed: false,
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  compressed: PropTypes.bool,
}

export default Pagination
