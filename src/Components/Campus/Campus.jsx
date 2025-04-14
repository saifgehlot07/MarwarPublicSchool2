import React from "react";
import "./Campus.css";
import galleryImage1 from "../../images/galleryImg1.jpeg";
import galleryImage2 from "../../images/galleryImg2.jpeg";
import galleryImage3 from "../../images/galleryImg3.jpeg";
import galleryImage4 from "../../images/galleryImg4.jpeg";
import whiteArrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={galleryImage1} alt="" />
        <img src={galleryImage2} alt="" />
        <img src={galleryImage3} alt="" />
        <img src={galleryImage4} alt="" />
      </div>
      <button className="btn darkBtn">
        See more here <img src={whiteArrow} alt="Arrow" />
      </button>
    </div>
  );
};

export default Campus;
