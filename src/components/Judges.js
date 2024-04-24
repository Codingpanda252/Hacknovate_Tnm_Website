import React, { useState } from 'react';
import './Judges.css';

const Judge_data = [
  {
    id: 1,
    name: "Ayon Roy",
    description: "Executive Data Scientist @ NielsenIQ",
    src: "/Ayon.png",
  },
  {
    id: 2,
    name: "Dr. Amit Gautum",
    description:
      "Asst. Director of Career Development Cell of Maharaja Agrasen Institute of Technology (MAIT)",
    src: "/AmitGautum.png",
  },
  {
    id: 3,
    name: "Dr. Jyoti Kaushik",
    description:
      "Assistant Professor at Maharaja Agrasen Institute Of Technology",
    src: "/JyotiKaushik.png",
  },
];

const Judges = () => {
  const [hoveredJudge, setHoveredJudge] = useState(null);

  const handleMouseEnter = (judgeId) => {
    setHoveredJudge(judgeId);
  };

  const handleMouseLeave = () => {
    setHoveredJudge(null);
  };

  return (
    <div className="judges-container theme-border">
      <h2 className="section-heading">Our Judges</h2>
      <div className="judge-list">
        {Judge_data.map((judge) => (
          <div
            key={judge.id}
            className={`judge-card ${hoveredJudge === judge.id ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(judge.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={judge.src}
              alt={judge.name}
              className="judge-photo"
            />
            <div className="judge-info">
              <h3 className="judge-name">{judge.name}</h3>
              <p className="judge-description">{judge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Judges;
