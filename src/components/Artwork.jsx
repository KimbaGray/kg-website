import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import I1 from "../images/1.png";
import I2 from "../images/2.png";
import I3 from "../images/3.png";
import I4 from "../images/4.png";
import I5 from "../images/5.png";
import I6 from "../images/6.png";
import I7 from "../images/7.png";
import I8 from "../images/8.png";
import I9 from "../images/9.png";
import I10 from "../images/10.png";
import I11 from "../images/11.png";
import I12 from "../images/12.png";

const images = [I7, I8, I6, I9, I4, I5, I11, I12, I1, I2, I3, I10];

class Artwork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div>
        <div className="imageBox">
          <img
            src={this.props.image}
            alt="Watercolour illustration of flowers and leaves"
            className="image"
            onClick={() =>
              this.setState({
                isOpen: true,
                photoIndex: 3,
              })
            }
          ></img>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Artwork;
