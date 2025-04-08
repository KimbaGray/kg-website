import React, { Component } from "react";
import CeramicsArtwork from "./CeramicsArtwork";
import "../styles/Ceramics.css";

class Ceramics extends Component {
  render() {
    return (
      <div className="illustrationContainer">
        <p id="illustrationText"> 
          I started handbuilding and wheel throwing pottery two years ago at a local pottery studio. The process is calming, sometimes frustrating, but mostly humbling.
        </p>
        <div>
          <CeramicsArtwork />
        </div>
      </div>
    );
  }
}

export default Ceramics;
