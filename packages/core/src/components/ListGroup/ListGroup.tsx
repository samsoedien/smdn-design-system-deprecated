import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledListGroup = styled.ul``

export interface IListGroupProps {}

const ListGroup: React.FC<IListGroupProps> = () => {
  return (
    <StyledListGroup className="smdn-list-group" data-test="list-group-component">
      List Group
    </StyledListGroup>
  )
}

ListGroup.propTypes = {}

export default ListGroup
