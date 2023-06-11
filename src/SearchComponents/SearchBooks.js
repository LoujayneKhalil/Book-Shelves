import { Component } from "react";
import Cards from "../Cards";
import { ArrowLeft } from "react-bootstrap-icons";
import { DebounceInput } from "react-debounce-input";

class SearchBooks extends Component {
  constructor() {
    super();
    this.state = { books: [] };
    this.updatedSearch.bind(this);
  }

  async fetchData(search) {
    try {
      const url = `http://openlibrary.org/search.json?title=${search}`;
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ books: json.docs });
      console.log(url);
    } catch (error) {
      console.log(error, this.url);
    }
  }

  updatedSearch(e) {
    this.fetchData(e.target.value);
  }

  render() {
    return (
      <div className="SearchPage">
        <div className="search-header">
          <ArrowLeft
            className="back-arrow"
            onClick={() => this.props.setView(true)}
          />
          <DebounceInput
            minLength={3}
            debounceTimeout={500}
            placeholder="Enter the Title"
            onChange={(e) => this.updatedSearch(e)}
            className="border-0 search-input"
          />
        </div>
        <Cards books={this.state.books} />
      </div>
    );
  }
}

export default SearchBooks;
