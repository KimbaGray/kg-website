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
          <a
            href="https://drive.google.com/file/d/19p55L1rZSnLm0fdS33yHyQK-5sDyUH2f/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <CgProfile id="icon" />
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
            By day, I lead projects and programmes for a 20,000+ community of
            womxn as Senior Programme & Delivery Manager at{" "}
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
            By night, I am a web designer and developer, watercolour illustrator
            and occasional sewist.
          </span>
          <span className="aboutLines">
            I completed a Web Development course last spring and continue to
            code with my coding group. Led by our former instructor, we are
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
