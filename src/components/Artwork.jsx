import React, { Component } from "react";

class Artwork extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="imageBox">
          <img
            src={this.props.image}
            alt="Watercolour illustration of flowers and leaves"
            className="image"
          ></img>
        </div>
      </div>
    );
  }
}

export default Artwork;
