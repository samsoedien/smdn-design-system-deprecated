import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { ChevronDownIcon } from '@smdn/icons'

const StyledAccordionItem = styled.div`
  box-sizing: border-box;
  background-color: white;
  padding: 16px;
  margin-bottom: 16px;
`

const StyledAccordionItemLabel = styled.div`
  position: relative;
  font-size: 22px;
`

const StyledAccordionItemContent = styled.div<any>`
  font-size: 14px;
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4s ease;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      max-height: 999px;
    `}
`

const StyledAccordionItemIcon = styled.i<any>`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  transition: all 0.4s ease;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(-50%) rotate(180deg);
    `}
`

export interface IAccordionItemProps {
  content: {
    label: string
    content: any
    isOpen: boolean
  }
  index: any
  toggleAccordion: (index: any) => any
}

const AccordionItem: React.FC<IAccordionItemProps> = ({ content, index, toggleAccordion }) => {
  return (
    <StyledAccordionItem className="smdn-accordion-item" data-test="accordion-item-component">
      <StyledAccordionItemLabel onClick={() => toggleAccordion(index)}>
        {content.label}
        <StyledAccordionItemIcon isOpen={content.isOpen}>
          <ChevronDownIcon />
        </StyledAccordionItemIcon>
      </StyledAccordionItemLabel>
      <StyledAccordionItemContent isOpen={content.isOpen}>{content.content}</StyledAccordionItemContent>
    </StyledAccordionItem>
  )
}

AccordionItem.propTypes = {
  content: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
}

export default AccordionItem
