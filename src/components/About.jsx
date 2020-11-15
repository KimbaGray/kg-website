import React, { Component } from "react";
import "../styles/About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="welcomeText">
        <h1 classname="nameKg">Kim Gray</h1>
        <p className="aboutText">
          <span className="aboutLines">
            By day, I am a Programme Manager at Code First Girls. I am
            London-based, but currently working remotely. Supporting diversity
            and inclusion in tech by driving engagement through programmes and
            events at Code First Girls. Learning languages of modern technology
            after having completed a Web Development Bootcamp (Wild Code School,
            Russell Code School). Currently building an app
            (https://libertybellapp.com/ - coming to app stores near you very
            soon) and working on personal projects. Creating bespoke watercolour
            illustrations for cards and invitations.
          </span>
          <span className="aboutLines">
            By night, I am a learner web developer and designer, watercolour
            illustrator and occasional sewist.{" "}
          </span>
          <span className="aboutLines">
            I also collect baskets (yep, woven baskets) and wooden spoons (yep,
            wooden spoons for cooking).
          </span>
        </p>
      </div>
    );
  }
}

export default About;
