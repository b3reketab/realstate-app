import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imgIndx, setImgIndx] = useState(null);

  const changeSlide = (direction) => {
    if( direction == "left") {
        if(imgIndx == 0) {
            setImgIndx(images.length - 1)
        } else {
            setImgIndx(imgIndx - 1)
        }
    } else {
        if(imgIndx == (images.length - 1)) {
            setImgIndx(0)
        } else {
            setImgIndx(imgIndx + 1)
        }
    }
  }

  return (
    <div className="slider">
      {imgIndx !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imgIndx]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="arrow.png" className="right" alt="" />
          </div>
          <div className="close" onClick={() => setImgIndx(null)}>X</div>
        </div>
      )}
      <div className="bigImage" onClick={() => setImgIndx(0)}>
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} onClick={() => setImgIndx(index + 1)} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
