import React, { useState, FormEvent, ChangeEvent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Search } from '@smdn/icons'
import { TokenColorPaletteGrey05, TokenColorPaletteGrey10 } from '@smdn/tokens'

const StyledSearchBar = styled.form``
const StyledSearchBarInput = styled.input`
  height: 30px;
  border: none;
  border-radius: 3px 0 0 3px;
  background-color: ${TokenColorPaletteGrey05};
  text-indent: 6px;

  &:focus {
    outline: none;
  }
`
const StyledSearchBarButton = styled.button`
  height: 30px;
  border: none;
  border-radius: 0 3px 3px 0;
  background-color: ${TokenColorPaletteGrey10};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export interface ISearchBarProps {
  handleSubmitCallback: (searchValue: string) => void
  placeholder?: string
  withIcon?: boolean
}

const SearchBar: React.FC<ISearchBarProps> = ({ placeholder, withIcon, handleSubmitCallback }) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmitCallback(searchValue)
  }
  return (
    <StyledSearchBar onSubmit={handleSubmit} className="smdn-search-bar" data-test="search-bar-component">
      <StyledSearchBarInput
        type="search"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => handleChange(e)}
      />
      <StyledSearchBarButton type="submit">{withIcon ? <Search /> : 'Search'}</StyledSearchBarButton>
    </StyledSearchBar>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search...',
  withIcon: true,
}

SearchBar.propTypes = {
  handleSubmitCallback: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  withIcon: PropTypes.bool,
}

export default SearchBar
