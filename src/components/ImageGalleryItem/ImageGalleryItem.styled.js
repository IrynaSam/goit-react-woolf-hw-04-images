import styled from 'styled-components';

export const GalleryItem = styled.div`
  height: 250px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
