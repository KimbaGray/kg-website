import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../images/Logo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="customNav">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Watercolour illustration of a single orange flower"
            className="logo"
          />
        </Link>
        <nav className="navbar">
          <div className="nav">
            <span className="navLink">
              <Link className="nav-link" to="/design-and-development">
                Web/App Design & Development
              </Link>
            </span>
            <span className="navLink">
              <Link className="nav-link" to="/illustration">
                Illustration
              </Link>
            </span>
            <span className="navLink">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
