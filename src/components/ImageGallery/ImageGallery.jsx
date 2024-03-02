import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Gallery className="gallery">
      {images.map((image, index) => (
        <ImageGalleryItem
          key={image.id + index}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </Gallery>
  );
};
