import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     term: ""
  //   };
  // }

  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  // componentWillMount() {
  //   console.log("search_bar will mount");
  // }

  // componentDidMount() {
  //   console.log("search_bar did mount")
  // }

  render() {
    console.log("search bar render");
    return (
      <input
        // value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
        />
    );
  }
}

export default SearchBar;
