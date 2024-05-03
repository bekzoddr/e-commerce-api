import React, { memo } from "react";
import image from "../../assets/images/boost.svg";
const TimerBox = () => {
  return (
    <div className="timer-box container">
      <div className="info">
        <h2>Categories</h2>
        <h1>
          Enhance Your <br />
          Music Experience
        </h1>
        <div className="timer">
          <h3>
            24
            <span>Days</span>
          </h3>
          <h3>
            59
            <span>Hours</span>
          </h3>
          <h3>
            59
            <span>Minutes</span>
          </h3>
          <h3>
            59
            <span>Seconds</span>
          </h3>
        </div>
        <button>Buy Now!</button>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default memo(TimerBox);
