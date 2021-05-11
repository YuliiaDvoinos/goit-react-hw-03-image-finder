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
    "&:hover": {
      background: "darkgray",
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
