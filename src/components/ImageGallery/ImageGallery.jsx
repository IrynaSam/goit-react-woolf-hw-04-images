import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
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
  }
}
