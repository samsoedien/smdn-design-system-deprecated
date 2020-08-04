import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ArrowLeft, ArrowRight } from '@smdn/icons'

const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`
const StyledCarouselContent = styled.div<any>`
  height: 100%;
  display: flex;
`

const StyledCarouselSlide = styled.div<any>`
  min-width: 100%;
  height: 100%;
  background-image: url('${(props) => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: translateX(${(props) => props.translate}%);
  transition: 0.4s;
`

const StyledCarouselIndicators = styled.ol`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
`

const StyledCarouselIndicator = styled.li`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 0 3px;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`

const StyledCarouselControl = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: white;
`

export interface ICarouselProps {
  /** Array of image url for the slides */
  slides: string[]
  /** Interval for transitioning slides in millisecondes */
  interval?: number
  /**  Determines if the carousel will have indicators for which slide is active */
  indicators?: boolean
  /** Determines if the carousel will respond to key inputs */
  keyboard?: boolean
}

const Carousel: React.FC<ICarouselProps> = ({ interval, slides, indicators, keyboard }) => {
  const [translate, setTranslate] = useState<number>(1)

  useEffect(() => {
    setTimeout(() => {
      setTranslate(translate - 100)
    }, interval)
  })

  return (
    <StyledCarousel className="smdn-carousel" data-test="carousel-component">
      {indicators && (
        <StyledCarouselIndicators>
          {slides.map((slide, index) => (
            <StyledCarouselIndicator key={index} />
          ))}
        </StyledCarouselIndicators>
      )}
      <StyledCarouselContent>
        {slides.map((slide, index) => (
          <StyledCarouselSlide key={index} image={slide} translate={translate} />
        ))}
      </StyledCarouselContent>
      <StyledCarouselControl>
        <ArrowLeft />
      </StyledCarouselControl>
      <StyledCarouselControl>
        <ArrowRight />
      </StyledCarouselControl>
    </StyledCarousel>
  )
}

Carousel.defaultProps = {
  interval: 5000,
  indicators: false,
  keyboard: true,
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  interval: PropTypes.number,
  indicators: PropTypes.bool,
  keyboard: PropTypes.bool,
}

export default Carousel
