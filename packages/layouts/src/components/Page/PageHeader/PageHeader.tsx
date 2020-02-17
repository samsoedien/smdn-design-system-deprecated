import React from 'react'
import PropTypes from 'prop-types'

interface IPageHeaderProps {
  children: React.ReactNode
}

const PageHeader: React.FC<IPageHeaderProps> = ({ children }) => {
  return (
    <header className="smdn-page-header" data-test="page-header-component">
      {children}
    </header>
  )
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageHeader
