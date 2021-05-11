import { Component } from "react";
import imagesApi from "./servises/images-api";
import Container from "./Components/Container/Container";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import LoadMoreBtn from "./Components/LoadMoreBtn";

//https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
//20729636-758ecad9be3e02f0a1d03c2f3

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
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
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  render() {
    const { images, isLoading, error } = this.state;
    const shouldBtnRender = images.length > 0 && !isLoading;
    return (
      <div className="App">
        <Container>
          <>
            <Searchbar onSubmit={this.onChangeQuery} />
            {error && <h2>error {error}</h2>}
            <ImageGallery images={images} />
            {isLoading && <p>loading...</p>}
            {shouldBtnRender && <LoadMoreBtn loadMore={this.fetchImages} />}
          </>
        </Container>
      </div>
    );
  }
}

export default App;
