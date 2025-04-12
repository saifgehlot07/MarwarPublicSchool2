import React from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/next-icon.png";
import backIcon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={nextIcon} alt="Next Btn" className="next-btn" />
      <img src={backIcon} alt="Back Btn" className="back-btn" />
    </div>
  );
};

export default Testimonials;
