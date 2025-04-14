import React from "react";
import "./Programs.css";
import programImage01 from "../../images/acadmicsphoto1.png";
import programImage02 from "../../images/acadmicsphoto2.png";
import programImage03 from "../../images/acadmicsphoto3.png";
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
          <p>Study With Fun</p>
        </div>
      </div>
      <div className="program">
        <img src={programImage02} alt="" />
        <div className="caption">
          <img src={programIcon02} alt="" />
          <p>Teach with Discipline</p>
        </div>
      </div>
      <div className="program">
        <img src={programImage03} alt="" />
        <div className="caption">
          <img src={programIcon03} alt="" />
          <p>Celebrate Events</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
