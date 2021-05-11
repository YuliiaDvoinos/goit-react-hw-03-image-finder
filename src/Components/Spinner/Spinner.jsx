import Loader from "react-loader-spinner";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  loader__container: {
    width: 100,
    margin: '0 auto'
  }
});
const Spinner = () => {
  const styles = useStyles()
  return (
    <div className={styles.loader__container}>
      <Loader
        type="Bars"
        color="bisque"
        height={100}
        width={100}
      timeout={3000} //3 secs
      />
    </div>)
};

export default Spinner;

// export default class Spinner extends Component {
  
//   render() {
//     return (
//       <div className="loader__container">
//         <Loader
//         type="Bars"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         // timeout={3000} //3 secs
//       />
//       </div>
//     );
//   }
// };

