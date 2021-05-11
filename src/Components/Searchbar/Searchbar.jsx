import { Component } from 'react';
import {ReactComponent as SearchIcon} from '../../images/search.svg'
import styles from './Searchbar.module.css';

class Searchbar extends Component {
    render() {
         return <header className={styles.Searchbar}>
                  <form className={styles.SearchForm}>
                   

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                 />
                  <button type="submit" className={styles.SearchFormSubmitBtn}>
                        <span className="SearchForm-button-label"><SearchIcon/></span>
                 </button>
                 
                    </form>
                </header>
    };
};

export default Searchbar;