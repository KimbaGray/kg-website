import React, { Component } from "react";
import Artwork from "./Artwork";
import "../styles/Illustration.css";
import I1 from "../images/1.png";
import I2 from "../images/2.png";
import I3 from "../images/3.png";
import I4 from "../images/4.png";
import I5 from "../images/5.png";
import I6 from "../images/6.png";
import I7 from "../images/7.png";

class Illustration extends Component {
  state = {
    originalIllustrations: [
      {
        image: I4,
      },
      {
        image: I5,
      },
      {
        image: I6,
      },
      {
        image: I7,
      },
      {
        image: I1,
      },
      {
        image: I2,
      },
      {
        image: I3,
      },
    ],
    illustrations: [],
  };

  componentDidMount() {
    this.setState({
      illustrations: this.state.originalIllustrations,
    });
  }

  render() {
    return (
      <div className="illustrationContainer">
        <p id="illustrationText">
          Inspired by nature's colours and shapes, I create hand-drawn and
          painted watercolour illustrations for cards, invitations and the
          occasional ceramic.
        </p>
        <div className="grid">
          {this.state.illustrations.map((artwork) => (
            <Artwork image={artwork.image} />
          ))}
        </div>
      </div>
    );
  }
}

export default Illustration;
