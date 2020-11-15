import React, { Component } from "react";
import "../styles/About.css";
import { BiEnvelope } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="welcomeText">
        <h1 classname="nameKg">Kim Gray</h1>
        <div className="social">
          <a href="mailto:kim.lc.gray@gmail.com">
            <BiEnvelope id="icon" />
          </a>
          <a href="mailto:kim.lc.gray@gmail.com">
            <FaLinkedinIn id="icon" />
          </a>
          <a href="mailto:kim.lc.gray@gmail.com">
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
            currently building an{" "}
            <a
              href="https://libertybellapp.com/ "
              target="_blank"
              rel="noreferrer"
            >
              app{" "}
            </a>{" "}
            (coming to app stores near you very soon).
          </span>
          <span className="aboutLines">
            I also collect baskets (yes, woven baskets) and wooden spoons (yes,
            wooden spoons for cooking).
          </span>
        </p>
      </div>
    );
  }
}

export default About;
