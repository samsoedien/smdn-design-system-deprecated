import React from 'react'
// import PropTypes from 'prop-types'

interface IPageSideBar {}

const PageSideBar: React.FC<IPageSideBar> = () => {
  return <div className="smdn-page-side-bar" data-test="page-side-bar-component" />
}

PageSideBar.propTypes = {}

export default PageSideBar
