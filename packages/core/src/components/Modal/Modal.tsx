import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenColorPaletteGrey05, TokenSpacingSmall, TokenSpacingNone } from '@smdn/tokens'

import CloseButton from '../Alert/CloseButton'

const StyledModal = styled.div``

const StyledModelDialog = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

const StyledModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid grey;
  border-radius: 6px;
  width: 60%;
  background-color: #fff;
`

const StyledModalContentHeader = styled.header`
  margin: ${TokenSpacingNone} ${TokenSpacingSmall};
  display: flex;
`
const StyledModalContentBody = styled.main`
  padding: ${TokenSpacingSmall};
`
const StyledModalContentFooter = styled.footer`
  height: 48px;
  background-color: ${TokenColorPaletteGrey05};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: ${TokenSpacingNone} ${TokenSpacingSmall};
`

export interface IModalProps {
  children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ children }) => {
  return (
    <StyledModal tabindex="-1" className="smdn-modal" data-test="modal-component">
      <StyledModelDialog>
        <StyledModalContent>
          <StyledModalContentHeader>
            <h3>Heading</h3>
            <CloseButton onClose={() => console.log('closing modal')} />
          </StyledModalContentHeader>
          <StyledModalContentBody>{children}</StyledModalContentBody>
          <StyledModalContentFooter>
            <button type="button">Submit</button>
            <button type="button">Cancel</button>
          </StyledModalContentFooter>
        </StyledModalContent>
      </StyledModelDialog>
    </StyledModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Modal
