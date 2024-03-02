import styled from 'styled-components';

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
  padding: 16px;
  margin-bottom: 20px;
`;
