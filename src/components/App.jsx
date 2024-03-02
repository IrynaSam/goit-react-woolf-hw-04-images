import React, { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

import { fetchImages } from './auth';
import { Wrapper, LoaderWrapper } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currentPage !== prevState.currentPage ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      this.setState({ isLoading: true });
      try {
        const data = await fetchImages(
          this.state.searchQuery,
          this.state.currentPage
        );

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          totalHits: data.totalHits,
          loadMore: prevState.currentPage * 12 < data.totalHits,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
    });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  openModal = largeImageURL => {
    this.setState({ largeImageURL });
    this.toggleModal();
  };

  render() {
    const {
      images,
      isLoading,
      showModal,
      largeImageURL,
      totalHits,
      currentPage,
    } = this.state;
    const imagesPerPage = 12;
    const isLoadMoreVisible =
      images.length < totalHits &&
      images.length / currentPage === imagesPerPage;
    return (
      <Wrapper>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        <LoaderWrapper style={{ display: 'flex', justifyContent: 'center' }}>
          {isLoading && <Loader />}
        </LoaderWrapper>

        {isLoadMoreVisible && (
          <Button onClick={this.loadMore}>Load more</Button>
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} image={largeImageURL} />
        )}
      </Wrapper>
    );
  }
}
