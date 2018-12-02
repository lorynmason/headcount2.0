import React, { Component } from 'react';

class Search extends Component {
  
  handleSearch = (search) => {
    this.props.displaySearch(search)
  }

  render() {
    return (
      <input placeholder=' Search by district' onChange={(e) => this.handleSearch(e.target.value)}></input>
    );
  }
}

export default Search;