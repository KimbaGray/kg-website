import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import C1 from "../images/ceramics/C1.jpg";
import C2 from "../images/ceramics/C2.jpg";
import C3 from "../images/ceramics/C3.jpg";
import C4 from "../images/ceramics/C4.jpg";
import C5 from "../images/ceramics/C5.jpg";
import C6 from "../images/ceramics/C6.jpg";
import C7 from "../images/ceramics/C7.jpg";
import C8 from "../images/ceramics/C8.jpg";
import C9 from "../images/ceramics/C9.jpg";
import C10 from "../images/ceramics/C10.jpg";
import C11 from "../images/ceramics/C11.jpg";
import C12 from "../images/ceramics/C12.jpg";
import C13 from "../images/ceramics/C13.jpg";
import C14 from "../images/ceramics/C14.jpg";
import C15 from "../images/ceramics/C15.jpg";
import C16 from "../images/ceramics/C16.jpg";
import C17 from "../images/ceramics/C17.jpg";
import C18 from "../images/ceramics/C18.jpg";
import C19 from "../images/ceramics/C19.jpg";
import C20 from "../images/ceramics/C20.jpg";
import C21 from "../images/ceramics/C21.jpg";
import C22 from "../images/ceramics/C22.jpg";
import C23 from "../images/ceramics/C23.jpg";
import C24 from "../images/ceramics/C24.jpg";
import C25 from "../images/ceramics/C25.jpg";
import C26 from "../images/ceramics/C26.jpg";
import C27 from "../images/ceramics/C27.jpg";
import C28 from "../images/ceramics/C28.jpg";
import C29 from "../images/ceramics/C29.jpg";
import C30 from "../images/ceramics/C30.jpg";
import C31 from "../images/ceramics/C31.jpg";
import C32 from "../images/ceramics/C32.jpg";
import C33 from "../images/ceramics/C33.jpg";
import C34 from "../images/ceramics/C34.jpg";


const images = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12,C13, C14, C15, C16, C17, C18, C19,C20, C21, C22, C23, C24, C25, C26, C27, C28, C29, C30, C31, C32, C33, C34];

class CeramicsArtwork extends Component {
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
              src={C1}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C2}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C3}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          {/* <div className="imageBox">
            <img
              src={C4}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div> */}
          <div className="imageBox">
            <img
              src={C5}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C6}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C7}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C8}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C9}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C10}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C11}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C12}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C13}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C12}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C13}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          {/* <div className="imageBox">
            <img
              src={C14}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div> */}
          <div className="imageBox">
            <img
              src={C15}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C16}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          {/* <div className="imageBox">
            <img
              src={C17}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div> */}
          <div className="imageBox">
            <img
              src={C18}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C19}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C20}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C21}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C22}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C23}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C24}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C25}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C26}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C27}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C28}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C29}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C30}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C31}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C32}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C33}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
            />
          </div>
          <div className="imageBox">
            <img
              src={C34}
              className="image"
              onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
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

export default CeramicsArtwork;
