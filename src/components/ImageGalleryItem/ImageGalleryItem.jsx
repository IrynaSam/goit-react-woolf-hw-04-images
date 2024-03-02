import React from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <GalleryItem
      className="gallery-item"
      onClick={() => onImageClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt="" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
