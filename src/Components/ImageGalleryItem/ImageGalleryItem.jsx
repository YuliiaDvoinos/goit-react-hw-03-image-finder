import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  image: {
    width: 250,
    height: 200,
  },
  list__item: {
    marginTop: 10,
    "&:not(:nth-child(4n + 4))": {
      marginRight: 10,
    },
  },
});

const ImageGalleryItem = ({ id, url, alt }) => {
  const styles = useStyles();
  return (
    <li key={id} className={styles.list__item}>
      <img src={url} alt={alt} className={styles.image} />
    </li>
  );
};
export default ImageGalleryItem;
