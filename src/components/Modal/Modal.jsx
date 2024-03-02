import React, { Component } from 'react';
import { Overlay, ModalContent, Img } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalContent>
          <Img src={image} alt="Large view" />
        </ModalContent>
      </Overlay>
    );
  }
}
