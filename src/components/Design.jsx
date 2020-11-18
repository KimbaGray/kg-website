import React, { Component } from "react";
import "../styles/Design.css";
import D1 from "../images/designdev/1.png";
import D2 from "../images/designdev/2.png";
import D3 from "../images/designdev/3.png";
import D4 from "../images/designdev/4.png";
import D5 from "../images/designdev/5.png";
import D6 from "../images/designdev/6.png";
import D7 from "../images/designdev/7.png";
import D8 from "../images/designdev/8.png";
import D9 from "../images/designdev/9.png";
import D10 from "../images/designdev/10.png";
import D11 from "../images/designdev/11.png";
import D12 from "../images/designdev/12.png";
import D13 from "../images/designdev/13.png";
import D14 from "../images/designdev/14.png";
import D15 from "../images/designdev/15.png";

class Design extends Component {
  state = {};
  render() {
    return (
      <div className="designContainer">
        <p id="designText">
          Having completed a Web Development course, I use front-end technolgies
          (HTML & CSS, JavaScript, ReactJS) with Node.js, Express Framework and
          MySQL in my portfolio of projects.
          <p className="dumpling">
            Disclaimer: I really love dumplings and needed a theme for some
            mini-projects 🥟
          </p>
        </p>
        <div className="grid">
          <div className="box">
            <p className="textBox">
              A portfolio website for a freelance stylist and costume designer,
              including website design and development and other brand asset
              creation.
            </p>
          </div>
          <div className="box">
            <img
              src={D1}
              alt="Felicity Gray Stylist website screen grab"
              className="image"
              id="imageLink"
            ></img>
          </div>
          <div className="box">
            <img
              src={D2}
              alt="Felicity Gray Stylist website screen grab"
              className="image"
            ></img>
          </div>
          <div className="box">
            <img
              src={D3}
              alt="Felicity Gray Stylist website screen grab"
              className="image"
            ></img>
          </div>
          <div className="box">
            <p className="textBox">
              A portfolio website for a freelance stylist and costume designer,
              including website design and development and other brand asset
              creation.
            </p>
          </div>
          <div className="box">
            <img
              src={D4}
              alt="Felicity Gray Stylist website screen grab"
              className="image"
            ></img>
          </div>
          <div className="box">
            <img
              src={D5}
              alt="Felicity Gray Stylist website screen grab"
              className="image"
            ></img>
          </div>
          <div className="box">
            <img
              src={D6}
              alt="Felicity Gray Stylist website screen grab"
              className="image"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
