import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="welcomeText">
          <h1 classname="nameKg">Hi, I'm Kim.</h1>
          <p className="meKg">
            <span> TechEd Operations Leader.
         Ceramicist and watercolour illustrator.
         Occasional web designer and developer.</span>

          </p>
          <div className="homeButtonOuter">
            <div className="homeButtonContainer">
              <span className="homeButton">
                <Link to="/design-and-development">Design & Development</Link>
              </span>
            </div> 
            <div className="homeButtonContainer">
              <span className="homeButton">
                <Link to="/illustration">Illustration</Link>
              </span>
            </div>
            <div className="homeButtonContainer">
              <span className="homeButton">
                <Link to="/ceramics">Ceramics</Link>
              </span>
            </div>
            <div className="homeButtonContainer">
              <span className="homeButton">
                <Link to="/about">About</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
