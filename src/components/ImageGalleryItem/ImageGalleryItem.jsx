import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    const { image, onImageClick } = this.props;
    return (
      <GalleryItem
        className="gallery-item"
        onClick={() => onImageClick(image.largeImageURL)}
      >
        <img src={image.webformatURL} alt="" />
      </GalleryItem>
    );
  }
}
