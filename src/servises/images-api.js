import axios from "axios";

const fetchImages = ({ searchQuery = "", page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=20729636-758ecad9be3e02f0a1d03c2f3&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default {fetchImages};
