import React from "react";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div>
      <div className="prizes-heading">
        <h2>Prizes</h2>
      </div>
      <div className="prizes-container">
        <div className="prize-item">
          <img
            src="runner-up-prize.jpg"
            alt="Winner Prize"
            className="prize-image"
          />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Runner Up Prize</h3>
              <p>Runner Up Prize</p>
            </div>
          </div>
        </div>
        <div className="prize-item">
          <img
            src="winner-prize.jpg"
            alt="Runner Up Prize"
            className="prize-image"
          />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Winner Prize</h3>
              <p>Winner Prize worth Rs. 3000/-</p>
            </div>
          </div>
        </div>
        <div className="prize-item">
          <img
            src="second-runner-up-prize.jpg"
            alt="Second Runner Up Prize"
            className="prize-image"
          />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Second Runner Up Prize</h3>
              <p>Second Runner Up Prize</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
