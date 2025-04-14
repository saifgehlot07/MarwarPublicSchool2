import React, { useRef } from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/next-icon.png";
import backIcon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={nextIcon}
        alt="Next Btn"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={backIcon}
        alt="Back Btn"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Pooja Singh</h3>
                  <span>MPS, Nagaur</span>
                </div>
              </div>
              <p>
                My child loves coming to school every day. The teachers are kind
                and caring. He has learned so many new words. The school is
                always clean and safe. We are very happy with everything!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Mohammed Shakil</h3>
                  <span>MPS, Nagaur</span>
                </div>
              </div>
              <p>
                This school is perfect for little kids. My daughter enjoys
                playing and learning. She always comes home with a smile.
                Teachers help the kids with love. I feel good sending her here.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Deepika Jhakar</h3>
                  <span>MPS, Nagaur</span>
                </div>
              </div>
              <p>
                A great place for early learning! The staff is so friendly and
                gentle. My son has become more confident. He sings, draws, and
                talks more now. Thank you for the love and care.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Amir Mohammed</h3>
                  <span>MPS, Nagaur</span>
                </div>
              </div>
              <p>
                We love this nursery school a lot. The classrooms are fun and
                colorful. My child has made many friends here. Every day is full
                of fun and learning. Very thankful to the lovely teachers!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
