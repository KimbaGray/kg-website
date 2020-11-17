import React, { Component } from "react";
import "../styles/About.css";
import { BiEnvelope } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";

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
          <a
            href="https://www.instagram.com/kimba_gray/"
            target="_blank"
            rel="noreferrer"
          >
            <span id="cvIcon">CV</span>
          </a>
          <a href="mailto:kim.lc.gray@gmail.com">
            <BiEnvelope id="icon" />
          </a>
          <a
            href="https://www.instagram.com/kimba_gray/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram id="icon" />
          </a>
        </div>
        <p className="aboutText">
          <span className="aboutLines">
            By day, I support diversity and inclusion in tech by driving
            engagement through programmes and events as Programme Manager at{" "}
            <a
              href="https://codefirstgirls.org.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Code First Girls
            </a>
            .
          </span>
          <span className="aboutLines">
            By night, I am a learner web designer and developer, watercolour
            illustrator and occasional sewist.
          </span>
          <span className="aboutLines">
            I completed a Web Development course earlier this year and continue
            to code with my coding group. Led by our previous instructor, we are
            currently building the{" "}
            <a
              href="https://libertybellapp.com/ "
              target="_blank"
              rel="noreferrer"
            >
              Liberty Bell app{" "}
            </a>{" "}
            - coming to app stores near you very soon!
          </span>
        </p>
      </div>
    );
  }
}

export default About;
