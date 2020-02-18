import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeroBanner = styled.div`
  width: 100%;
  height: 80vh;
  background: #efefef;
`

export interface IHeroBannerProps {
  children?: React.ReactNode
}

const HeroBanner: React.FC<IHeroBannerProps> = ({ children }) => {
  return (
    <StyledHeroBanner className="smdn-hero-banner" data-test="hero-banner-component">
      {children}
    </StyledHeroBanner>
  )
}

HeroBanner.defaultProps = {
  children: undefined,
}

HeroBanner.propTypes = {
  children: PropTypes.node,
}

export default HeroBanner
