import React, { useState } from 'react';
import './BigHeading.css';

const BigHeading = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const text = 'HACKNOVATE';

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="big-heading-container">
      <h1 className="big-heading-text">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className={`letter ${hoveredIndex === index ? 'disintegrate' : ''}`}
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
      </div>
    </div>
  );
};

export default BigHeading;
