import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <StyledButton className="Button" onClick={onClick}>
      Load more
    </StyledButton>
  );
};
