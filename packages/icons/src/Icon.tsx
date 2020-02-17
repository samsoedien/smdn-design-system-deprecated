import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.svg`
  width: 24px;
  height: 24px;
`

interface IIconProps {
  svgPath: string
  name?: string
}

const Icon: React.FC<IIconProps> = ({ name, svgPath }) => {
  return (
    <StyledIcon className="smdn-icon" data-test="icon-component">
      <use href={svgPath} name={name} />
    </StyledIcon>
  )
}

Icon.defaultProps = {
  name: undefined,
}

Icon.propTypes = {
  svgPath: PropTypes.string.isRequired,
  name: PropTypes.string,
}

export default Icon
