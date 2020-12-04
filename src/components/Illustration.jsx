import React, { Component } from "react";
import Artwork from "./Artwork";
import "../styles/Illustration.css";

class Illustration extends Component {
  render() {
    return (
      <div className="illustrationContainer">
        <p id="illustrationText">
          Inspired by nature's colours and shapes, I create hand-drawn and
          painted watercolour illustrations for cards, invitations, labels and
          the occasional ceramic.
        </p>
        <div>
          <Artwork />
        </div>
      </div>
    );
  }
}

export default Illustration;
