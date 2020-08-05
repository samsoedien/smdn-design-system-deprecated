import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TokenSpacingXSmall, TokenSpacingNone, TokenColorBackgroundGrey25 } from '@smdn/tokens'
import { Orientation } from '@smdn/shared'

const StyledDivider = styled.div<Partial<IDividerProps>>`
  display: inline;
`

const StyledDividerHorizontal = styled.hr<Partial<IDividerProps>>`
  width: 100%;
  border: none;
  border-top: 0.5px solid ${TokenColorBackgroundGrey25};
`

const StyledDividerVertical = styled.div`
  display: inline-block;
  height: 100%;
  min-height: 24px;
  border-left: 0.5px solid ${TokenColorBackgroundGrey25};
  margin: ${TokenSpacingNone}, ${TokenSpacingXSmall};
`

export interface IDividerProps {
  label?: string
  orientation?: Orientation
}

const Divider: React.FC<IDividerProps> = ({ label, orientation }) => {
  return (
    <StyledDivider>
      {orientation === 'horizontal' ? (
        <StyledDividerHorizontal orientation={orientation} className="smdn-divider" data-test="divider-component">
          {label && <span>label</span>}
        </StyledDividerHorizontal>
      ) : (
        <StyledDividerVertical />
      )}
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
