import { Component } from "react";

class Cards extends Component {
  handleClick(e, book) {
    const selected = e.target.value;
    console.log(selected);

    const booksArr = JSON.parse(localStorage.getItem(selected));
    console.log(booksArr);

    if (selected === "none") {
      // alert(book.status);
    }

    if (book.status !== undefined) {
      let currentArr = JSON.parse(localStorage[book.status]);
      for (let i = 0; i < currentArr.length; i++) {
        
        if (currentArr[i].key === book.key) {
          currentArr.splice(i, 1);
          localStorage.setItem(book.status, JSON.stringify(currentArr));
        }
      }
    }

    if (selected !== "none") {
      book.status = selected;

      if (booksArr == null) {
        localStorage.setItem(selected, JSON.stringify([book]));
      } else {
        localStorage.setItem(selected, JSON.stringify([...booksArr, book]));
      }
    }
    if (this.props.updateState !== undefined) {
      this.props.updateState();
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
              alt=""
            ></img>
            <div className="dropdown open">
              <option
                className="drop-down-btn dropdown-toggle"
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
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
          <div className="row w-100 d-flex justify-content-center">{searchedBook}</div>
        </div>
      </div>
    );
  }
}

export default Cards;
