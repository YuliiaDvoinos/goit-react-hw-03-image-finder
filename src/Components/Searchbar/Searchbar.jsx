import { Component } from "react";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = { query: "" };
  handleInputChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleFormSubmit}>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <button type="submit" className={styles.SearchFormSubmitBtn}>
            <span className="SearchForm-button-label">
              <SearchIcon />
            </span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
