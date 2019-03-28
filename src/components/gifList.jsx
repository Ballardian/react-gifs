import React, { Component } from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectGif }) => {
  // destructuring above - means you can remove this.props below
  return (
    <div className="gif-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />)}
    </div>
  );
};

// can be written as
// const GifList = (props) => {
//  return (
//   <div className="gif-list">
//     {props.gifs.map((gif) => {
//       return <Gif key={gif.id} id={gif.id} />;
//  })}
//  </div>
//  );
// };
export default GifList;
