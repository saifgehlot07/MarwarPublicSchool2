import React from "react";
import "./Programs.css";
import programImage01 from "../../assets/program-1.png";
import programImage02 from "../../assets/program-2.png";
import programImage03 from "../../assets/program-3.png";
import programIcon01 from "../../assets/program-icon-1.png";
import programIcon02 from "../../assets/program-icon-2.png";
import programIcon03 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={programImage01} alt="" />
        <div className="caption">
          <img src={programIcon01} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programImage02} alt="" />
        <div className="caption">
          <img src={programIcon02} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programImage03} alt="" />
        <div className="caption">
          <img src={programIcon03} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
