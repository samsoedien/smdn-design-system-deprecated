import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDialog = styled.div``

export interface IDialogProps {
  children: React.ReactNode
}

const Dialog: React.FC<IDialogProps> = ({ children }) => {
  return (
    <StyledDialog className="smdn-dialog" data-test="dialog-component">
      {children}
    </StyledDialog>
  )
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Dialog
