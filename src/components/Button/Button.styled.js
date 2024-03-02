import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 60px;
  border: none;
  border-radius: 5px;
  background-color: #3546a8;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #59639e;
  }
`;
