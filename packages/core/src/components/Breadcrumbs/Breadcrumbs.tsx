import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBreadcrumbs = styled.div``

export interface IBreadcrumbsProps {}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = () => {
  return <StyledBreadcrumbs className="smdn-breadcrumbs" data-test="breadcrumbs-component" />
}

Breadcrumbs.propTypes = {}

export default Breadcrumbs
