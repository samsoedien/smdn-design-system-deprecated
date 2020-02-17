import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPageFooter = styled.footer<IPageFooterProps>`
  width: 100vw;
  height: 480px;
  background-color: #2e3131;
`

interface IPageFooterProps {
  children: React.ReactNode
}

const PageFooter: React.FC<IPageFooterProps> = ({ children }) => {
  return (
    <StyledPageFooter className="smdn-page-footer" data-test="page-footer-component">
      {children}
    </StyledPageFooter>
  )
}

PageFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageFooter
