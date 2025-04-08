import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../images/Logo.png";
import ScrollToTopBtn from "../utils/scrollToTopBtn";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className=" header">
        <Link to="/">
          <img
            src={Logo}
            alt="Watercolour illustration of a single orange flower"
            className="logo"
          />
        </Link>
        <div class="menu-container">
          <nav className="menu">
            <input
              class="menu-btn"
              type="checkbox"
              id="menu-btn"
              // style="border: 0; outline: 0"
            />
            <label class="menu-icon" for="menu-btn" tabindex="0">
              <span class="navicon"></span>
            </label>
            <div class="menu-outer">
              <ul class="menu-list">
                <li class="main-nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="main-nav-item">
                  <Link className="nav-link" to="/design-and-development">
                    Design & Development
                  </Link>
                </li>
                <li class="main-nav-item">
                  {" "}
                  <Link className="nav-link" to="/ceramics">
                    Ceramics
                  </Link>
                </li>
                <li class="main-nav-item">
                  {" "}
                  <Link className="nav-link" to="/illustration">
                    Illustration
                  </Link>
                </li>
                <li class="main-nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ScrollToTopBtn />
      </div>
    );
  }
}

export default Header;
