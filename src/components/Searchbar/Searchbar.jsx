import React, { useState } from 'react';
import {
  StyledSearchbar,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <StyledSearchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchIcon>🔍</SearchIcon>
        </SearchButton>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </StyledSearchbar>
  );
};
