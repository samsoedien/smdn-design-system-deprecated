import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AccordionItem from './AccordionItem'

const StyledAccordion = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #efefef;
  margin: 0 auto;
  padding: 16px;
`

export interface IAccordionProps {}

const Accordion: React.FC<IAccordionProps> = () => {
  const [accordionContent, setAccordionContent] = useState<any>([
    {
      label: 'Can you open this accordion?',
      content: 'Good job!',
      isOpen: false,
    },
    {
      label: 'What about this one?',
      content: 'Hmm very interesting',
      isOpen: false,
    },
  ])

  const toggleAccordion = (index: any) => {
    setAccordionContent(
      accordionContent.map((content: any, i: any) => {
        if (i === index) content.isOpen = !content.isOpen
        else content.isOpen = false
        return content
      }),
    )
  }

  return (
    <StyledAccordion className="smdn-accordion" data-test="accordion-component">
      {accordionContent.map((content: any, index: any) => (
        <AccordionItem key={index} index={index} content={content} toggleAccordion={toggleAccordion} />
      ))}
    </StyledAccordion>
  )
}

Accordion.propTypes = {}

export default Accordion
