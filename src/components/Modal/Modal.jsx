import React, { useEffect } from 'react';
import { Overlay, ModalContent, Img } from './Modal.styled';

export const Modal = ({ onClose, image }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContent>
        <Img src={image} alt="Large view" />
      </ModalContent>
    </Overlay>
  );
};
