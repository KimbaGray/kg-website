import React, { Component } from "react";
import "../styles/About.css";
import { BiEnvelope } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="welcomeText">
        <h1 classname="nameKg">Kim Gray</h1>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/kim-gray/"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialLinkedin id="icon" />
          </a>
          <a href="mailto:kim.lc.gray@gmail.com">
            <BiEnvelope id="icon" />
          </a>
        </div>
        <p className="aboutText">
          <span className="aboutLines">
            By day, I'm part of the Senior Leadership Team at{" "}
            <a
              href="https://codefirstgirls.org.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Code First Girls
            </a>, as Associate Director of Operations.
            <br/> <br/>
            By night, I am a watercolour illustrator, ceramicist, occasional sewist and web designer and developer.
          </span>
        </p>
      </div>
    );
  }
}

export default About;
