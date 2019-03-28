import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id);
  }

 // speed up React by telling it when to update the component
 // dont call render if the props.id didnt change

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.id !== this.this.props.id;
  // }

  render() {
    console.log("gif render" + this.props.id);
    // use this if you do not have the data yet
    if (!this.props.id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
