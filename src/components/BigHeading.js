import React, { useState } from "react";
import "./BigHeading.css";

const BigHeading = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const text = "HACKNOVATE";

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="big-heading-container">
      <h1 className="big-heading-text">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={`letter ${hoveredIndex === index ? "disintegrate" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {letter}
          </span>
        ))}
      </h1>
      <div className="big-heading-desc text-center">
        <p className="presented-by">Presented By</p>
        <p className="EDC-MAIT">Entrepreneurship Development Cell, MAIT</p>
        <p className="presented-by">Venue</p>
        <p className="presented-by">Room Number 245-B, MAIT Campus</p>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-3xl font-bold mb-2">Register Now</h2>
        <a href="https://unstop.com/hackathons/hacknovate-maharaja-agrasen-institute-of-technology-mait-new-delhi-926622" target="_blank" rel="noopener noreferrer">
          <img
            src="Unstop-Logo.jpg"
            alt="Unstop-Logo"
            className="sponsor-logo"
          />
        </a>
      </div>
    </div>
  );
};

export default BigHeading;
