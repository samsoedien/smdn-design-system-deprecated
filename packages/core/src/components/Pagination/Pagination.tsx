import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05, TokenSpacingSmall } from '@smdn/tokens'

const StyledPagination = styled.nav`
  user-select: none;
`

const StyledPaginationList = styled.ul`
  list-style-type: none;
`

const StyledPaginationItem = styled.li`
  border: 1px solid grey;
  display: inline-block;
  padding: ${TokenSpacingSmall};

  &:hover {
    background-color: ${TokenColorPaletteGrey05};
  }
`

const StyledPaginationLink = styled.a`
  /* width: 100%;
  height: 100%; */
`

export interface IPaginationProps {
  pageCount: number
  compressed?: boolean
}

const Pagination: React.FC<IPaginationProps> = ({ compressed }) => {
  return (
    <StyledPagination aria-label="Page navigation" className="smdn-pagination" data-test="pagination-component">
      <StyledPaginationList>
        <StyledPaginationItem>
          <StyledPaginationLink href="#">{compressed ? '<' : 'Previous'}</StyledPaginationLink>
        </StyledPaginationItem>
        <StyledPaginationItem>
          <StyledPaginationLink href="#">1</StyledPaginationLink>
        </StyledPaginationItem>
        <StyledPaginationItem>
          <StyledPaginationLink href="#">2</StyledPaginationLink>
        </StyledPaginationItem>
        <StyledPaginationItem>
          <StyledPaginationLink href="#">3</StyledPaginationLink>
        </StyledPaginationItem>
        <StyledPaginationItem>
          <StyledPaginationLink href="#">{compressed ? '>' : 'Next'}</StyledPaginationLink>
        </StyledPaginationItem>
      </StyledPaginationList>
    </StyledPagination>
  )
}

Pagination.defaultProps = {
  compressed: false,
}

Pagination.propTypes = {
  compressed: PropTypes.bool,
}

export default Pagination
