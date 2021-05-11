import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  btn: {
    display: "block",
    margin: "0 auto",
    width: 100,
    height: 40,
    border: "1px solid gray",
    borderRadius: 4,
    background: "transparent",
    cursor: "pointer",
    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    "&:hover": {
      background: "bisque",
    },
  },
});
const LoadMoreBtn = ({ loadMore }) => {
  const styles = useStyles();
  return (
    <button type="button" onClick={loadMore} className={styles.btn}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
