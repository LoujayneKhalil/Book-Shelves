import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import Cards from "../Cards";

class Shelves extends Component {
  constructor(){
    super()
    this.state = {
      currentlyShelf:JSON.parse(localStorage.getItem("current reading")),
      wantToShelf:JSON.parse(localStorage.getItem("want to read")),
      ReadShelf:JSON.parse(localStorage.getItem("read")),
    }
  }


    
  render() {
    const shelfName =  [
      { id: 1, title: "Currently Reading" ,booksArr:this.state.currentlyShelf},
      { id: 2, title: "Want to Read",booksArr:this.state.wantToShelf},
      { id: 3, title: "Read",booksArr:this.state.ReadShelf },
    ]
    const title = shelfName.map((name) => {
      return (
        <div className="container" key={name.id}>
          <h2 className="shelf-title">{name.title}</h2>
            <Cards books={name.booksArr}/>
          <button className="add-book" onClick={()=>this.props.setView(false)}>+</button>
        </div>
      );
    });

    return (
      <div className="shelve-page">
        <div className="main-header">
          <h1>MyReads</h1>
        </div>
        <div>{title}</div>
      </div>
    );
  }
}

export default Shelves;
