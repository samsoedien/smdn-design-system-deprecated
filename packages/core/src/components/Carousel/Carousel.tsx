import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCarousel = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`
const StyledCarouselContent = styled.div<any>`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition};
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`

const StyledCarouselSlide = styled.div<any>`
  width: 100%;
  height: 100%;
  background-image: url('${(props) => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export interface ICarouselProps {
  slides: string[]
}

const Carousel: React.FC<ICarouselProps> = ({ slides }) => {
  const getWidth = (): number => window.innerWidth

  // const [state, setState] = useState<any>({
  //   translate: 0,
  //   transition: '0.4s',
  // })
  const state = { translate: 0, transition: '0.4s' }
  const { translate, transition } = state

  return (
    <StyledCarousel className="smdn-carousel" data-test="carousel-component">
      <StyledCarouselContent translate={translate} transition={transition} width={getWidth() * slides.length}>
        {slides.map((slide, index) => (
          <StyledCarouselSlide key={slide + index} image={slide} />
        ))}
      </StyledCarouselContent>
    </StyledCarousel>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
}

export default Carousel
