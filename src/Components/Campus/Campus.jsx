import React from "react";
import "./Campus.css";
import galleryImage1 from "../../assets/gallery-1.png";
import galleryImage2 from "../../assets/gallery-2.png";
import galleryImage3 from "../../assets/gallery-3.png";
import galleryImage4 from "../../assets/gallery-4.png";
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
