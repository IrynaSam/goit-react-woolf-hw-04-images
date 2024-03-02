import styled from 'styled-components';

export const StyledSearchbar = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  background-color: #3546a8;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const SearchForm = styled.form`
  position: relative;

  width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  padding-right: 50px;
  padding-left: 40px;
  border-radius: 2px;
  border: 2px solid #ddd;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #ccc;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 0;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
