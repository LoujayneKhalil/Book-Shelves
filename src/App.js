import React from "react";
import "./App.css";
import SearchBooks from "./SearchComponents/SearchBooks";
import Shelves from "./ShelvesComponents/Shelves";

export default class App extends React.Component {
  constructor() {
    super();
    this.handlePage.bind(this);
    this.state = {
      page: true,
    };
  }

  handlePage(value) {
    this.setState({ page: value });
  }

  render() {
    return (
      <>
        {this.state.page ? (
          <Shelves
            shelfName={this.state.shelfName}
            setView={(value) => this.handlePage(value)}
          />
        ) : (
          <SearchBooks setView={(value) => this.handlePage(value)} />
        )}
      </>
    );
  }
}
