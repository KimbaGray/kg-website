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

const images = [I7, I6, I9, I5, I4, I8, I11, I12, I1, I2, I3, I10];

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
        <div className="grid">
          <div className="imageBox">
            <img
              src={I7}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I6}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I9}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I5}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I4}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I8}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I11}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I12}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I1}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I2}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 9 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I3}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 10 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={I10}
              alt="Watercolour illustration of flowers and leaves"
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 11 })}
            />
          </div>
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
