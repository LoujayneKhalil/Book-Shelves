import { Component } from "react";

class Cards extends Component {
  handleClick(e, book) {
    const selected = e.target.value;
    
    const booksArr = JSON.parse(localStorage.getItem(selected));    
    if (booksArr == null) {
      localStorage.setItem(selected, JSON.stringify([book]));
    } else {
      localStorage.setItem(selected, JSON.stringify([...booksArr, book]));
    }
  }

  render() {
    const { books } = this.props;
    const searchedBook = books.map((book) => {
      return (
        <div className="col-2 my-3" key={book.cover_i}>
          <div className="card border-0 h-100">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
              className="book-cover mb-3"
            ></img>
            <div className="dropdown open">
              <option
                className="drop-down-btn dropdown-toggle"
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></option>
              <div
                onClick={(e) => this.handleClick(e, book)}
                className="dropdown-menu"
                aria-labelledby="triggerId"
                id="dropDown"
              >
                <option className="dropdown-item" value={"current reading"}>
                  Currently Reading
                </option>
                <option className="dropdown-item" value={"want to read"}>
                  Want to Read
                </option>
                <option className="dropdown-item" value={"read"}>
                  Read
                </option>
                <option className="dropdown-item" value={"none"}>
                  None
                </option>
              </div>
            </div>
            <span className="book-title">{book.title}</span>
            <span className="book-author">{book.author_name}</span>
          </div>
        </div>
      );
    });

    return (
      <div className="books-cards">
        <div className="container books-wrapper">
          <div className="row w-100 ">{searchedBook}</div>
        </div>
      </div>
    );
  }
}

export default Cards;
