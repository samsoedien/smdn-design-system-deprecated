import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDivider = styled.hr<Partial<IDividerProps>>``

export type Orientation = 'horizontal' | 'vertical'

export interface IDividerProps {
  label?: string
  orientation?: Orientation
}

const Divider: React.FC<IDividerProps> = ({ label, orientation }) => {
  return (
    <StyledDivider orientation={orientation} className="smdn-divider" data-test="divider-component">
      {label && <span>label</span>}
    </StyledDivider>
  )
}

Divider.defaultProps = {
  label: undefined,
  orientation: 'horizontal',
}

Divider.propTypes = {
  label: PropTypes.string,
  orientation: PropTypes.oneOf<Orientation>(['horizontal', 'vertical']),
}

export default Divider
