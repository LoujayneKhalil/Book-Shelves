import { Component } from "react";
import Cards from "../Cards";
import { ArrowLeft } from "react-bootstrap-icons";

class SearchBooks extends Component {
  constructor() {
    super();
    this.state = { books: [], search:'harry' };
    this.updatedSearch.bind(this)
  }

  async fetchData(){
    try{
      const url = `http://openlibrary.org/search.json?q=${this.state.search}`
      const response = await fetch(url)
      const json = await response.json()
      this.setState({...this.state,books: json.docs})
      console.log(url)
    } catch (error){
      console.log(error,this.url)
    }
  }
  
  updatedSearch (e){
    this.setState({...this.state, search: e.target.value})
    this.fetchData()
  }


  render() {

    return (
      <div className="SearchPage">
        <div className="search-header">
          <ArrowLeft className="back-arrow" onClick={()=>this.props.setView(true)}/>
          <input
            type="text"
            onChange={(e)=>this.updatedSearch(e)}
            placeholder="Enter the Title"
            className="border-0 search-input"
          ></input>
        </div>
          <Cards books={this.state.books}/>
      </div>
    );
  }
}

export default SearchBooks;
