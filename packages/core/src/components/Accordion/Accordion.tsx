import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAccordion = styled.div``

export interface IAccordionProps {
  children: React.ReactNode
}

const Accordion: React.FC<IAccordionProps> = ({ children }) => {
  return (
    <StyledAccordion className="smdn-accordion" data-test="accordion-component">
      {children}
    </StyledAccordion>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Accordion
