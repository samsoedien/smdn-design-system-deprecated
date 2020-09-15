import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAccordion = styled.div``
const StyledAccordionContent = styled.div<any>`
  height: 100%;

  ${(props) => {
    if (props.isOpen) {
      return `
        max-height: 320px;

      `
      // eslint-disable-next-line no-else-return
    } else {
      return `
        max-height: 0;
      `
    }
  }}
  overflow: hidden;
  transition: 0.4s;
`

export interface IAccordionProps {
  children: React.ReactNode
}

const Accordion: React.FC<IAccordionProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <StyledAccordion className="smdn-accordion" data-test="accordion-component">
      <div>
        <button type="button" onClick={handleClick}>
          Accordion 2
        </button>
      </div>
      <StyledAccordionContent isOpen={isOpen}>{children}</StyledAccordionContent>
    </StyledAccordion>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Accordion
