import propTypes from 'prop-types';
import { createUseStyles } from "react-jss";
import ImageGalleryItem from "../ImageGalleryItem";
const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
});
const ImageGallery = ({ images }) => {
  const styles = useStyles();
  return (
    <ul className={styles.list}>
      {images.map(({ id, webformatURL, tags }) => {
        return <ImageGalleryItem key={id} url={webformatURL} alt={tags} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
    images : propTypes.arrayOf(propTypes.shape({
        id: propTypes.number.isRequired
    }))
};

export default ImageGallery;
