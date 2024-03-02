import React, { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

import { fetchImages } from './auth';
import { Wrapper, LoaderWrapper } from './App.styled';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    const fetchImagesAsync = async () => {
      if (!searchQuery) return;

      setIsLoading(true);
      try {
        const data = await fetchImages(searchQuery, currentPage);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesAsync();
  }, [searchQuery, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setImages([]);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = imageURL => {
    setLargeImageURL(imageURL);
    toggleModal();
  };

  const imagesPerPage = 12;
  const isLoadMoreVisible =
    images.length < totalHits && images.length / currentPage === imagesPerPage;

  return (
    <Wrapper>
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery images={images} onImageClick={openModal} />
      <LoaderWrapper style={{ display: 'flex', justifyContent: 'center' }}>
        {isLoading && <Loader />}
      </LoaderWrapper>

      {isLoadMoreVisible && <Button onClick={loadMore}>Load more</Button>}

      {showModal && <Modal onClose={toggleModal} image={largeImageURL} />}
    </Wrapper>
  );
};
