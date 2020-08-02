import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledBreadcrumbs = styled.nav<Partial<IBreadcrumbsProps>>``

const StyledBreadcrumbList = styled.ol<Partial<IBreadcrumbsProps>>`
  list-style-type: none;
`

const StyledBreadcrumbItem = styled.li<Partial<IBreadcrumbsProps>>`
  display: inline-block;
  margin-right: 6px;

  &:last-child {
    text-decoration: none;
    pointer-events: none;
  }

  &:not(:last-child)::after {
    content: '/';
    margin-left: 6px;
  }
`

interface IBreadcrumbs {
  label: string
  href: string
}

export interface IBreadcrumbsProps {
  breadcrumbs: IBreadcrumbs[]
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <StyledBreadcrumbs
      breadcrumbs={breadcrumbs}
      aria-label="breadcrumbs"
      className="smdn-breadcrumbs"
      data-test="breadcrumbs-component"
    >
      <StyledBreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <StyledBreadcrumbItem key={index}>
            <a href={breadcrumb.href}>{breadcrumb.label}</a>
          </StyledBreadcrumbItem>
        ))}
      </StyledBreadcrumbList>
    </StyledBreadcrumbs>
  )
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
}

export default Breadcrumbs
