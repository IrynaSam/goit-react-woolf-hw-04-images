import React, { Component } from 'react';
import {
  StyledSearchbar,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <StyledSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit" className="button">
            <SearchIcon>🔍</SearchIcon>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </StyledSearchbar>
    );
  }
}
