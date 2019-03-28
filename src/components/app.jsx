import React, { Component } from 'react';

import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gifList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null //"FsaiMwHk9V5ss"

    };
  }

  search = (query) => {
    // TODO: API call
    giphy('FHIZk22TBvWc5Q6tXPyGFhJq5ErrKFbV').search({
        q: query,
        rating: 'g',
        limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (choice) => {
    this.setState({
      selectedGifId: choice
    });
  }

  render() {
    // const gifs = [
    //   { id: "cMso9wDwqSy3e" },
    //   { id: "DiiQyFONn5sL6" },
    //   { id: "5K3Vw3jUqwV56" }
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <Gif id={this.state.selectedGifId}/>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif= {this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
