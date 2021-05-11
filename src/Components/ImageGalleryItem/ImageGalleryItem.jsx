import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  image: {
    width: 250,
    height: 200,
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      
  transform: 'scale(1.03)',
  cursor: 'zoom-in'
}
    
  },
  list__item: {
    marginTop: 10,
    "&:not(:nth-child(4n + 4))": {
      marginRight: 10,
    },
  },
});

const ImageGalleryItem = ({ url, alt }) => {
  const styles = useStyles();
  return (
    <li className={styles.list__item}>
      <img src={url} alt={alt} className={styles.image} />
    </li>
  );
};
export default ImageGalleryItem;
