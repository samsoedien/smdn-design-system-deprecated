import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorTextDefault } from '@smdn/tokens'

const StyledLink = styled.a`
  text-decoration: none;
  color: ${TokenColorTextDefault};
`

export interface ILinkProps {
  href?: string
  disabled?: boolean
  openNewTab?: boolean
  children: NonNullable<React.ReactNode>
}

const Link: React.FC<ILinkProps> = ({ href, openNewTab, children, ...restProps }) => {
  let target = '_self'
  if (openNewTab) target = '_blank'
  return (
    <StyledLink href={href} target={target} {...restProps} className="smdn-link" data-test="link-component">
      {children}
    </StyledLink>
  )
}

Link.defaultProps = {
  href: '',
  disabled: false,
  openNewTab: false,
}

Link.propTypes = {
  href: PropTypes.string,
  disabled: PropTypes.bool,
  openNewTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Link
