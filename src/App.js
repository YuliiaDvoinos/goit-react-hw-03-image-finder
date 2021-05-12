import { Component } from "react";

import imagesApi from "./servises/images-api";
import Container from "./Components/Container/Container";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import LoadMoreBtn from "./Components/LoadMoreBtn";
import Spinner from "./Components/Spinner";
import Modal from "./Components/Modal";

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    modalImageURL: "",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  onImgFocus = (url) => {
    this.setState({ modalImageURL: url });
    this.toggleModal();
  };
  fetchImages = () => {
    const { page, searchQuery } = this.state;
    const options = { searchQuery, page };
    this.setState({ isLoading: true });
    imagesApi
      .fetchImages(options)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      error: null,
    });
    // this.fetchImages();
  };

  render() {
    const { images, isLoading, error, showModal, modalImageURL } = this.state;
    const shouldBtnRender = images.length > 0 && !isLoading;
    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImageURL} />
          </Modal>
        )}
        <Container>
          <>
            <Searchbar onSubmit={this.onChangeQuery} />
            {error && <h2>error {error}</h2>}

            <ImageGallery images={images} onClick={this.onImgFocus} />

            {isLoading && <Spinner />}
            {shouldBtnRender && <LoadMoreBtn loadMore={this.fetchImages} />}
          </>
        </Container>
      </div>
    );
  }
}

export default App;
