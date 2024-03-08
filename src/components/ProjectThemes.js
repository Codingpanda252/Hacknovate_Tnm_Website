// ProjectThemes.js

import React from 'react';
import './ProjectThemes.css';

const ProjectThemes = () => {
  return (
    <div className="project-themes-container">
      <h2 className="section-heading">Project Themes</h2>
      <div className="project-theme">
        <div className="project-theme-sponsors">
          <div className="sponsor-wrapper">
            <img src="/theme1.png" alt="Sponsor Logo 1" className="sponsor-logo" />
            <div className="sponsor-description">Social Entrepreneurship</div>
          </div>
          <div className="sponsor-wrapper">
            <img src="/theme2.png" alt="Sponsor Logo 2" className="sponsor-logo" />
            <div className="sponsor-description">Green and Sustainable Goals</div>
          </div>
          <div className="sponsor-wrapper">
            <img src="/theme3.jpg" alt="Sponsor Logo 3" className="sponsor-logo larger-logo" />
            <div className="sponsor-description">Open Innovation</div>
          </div>
          <div className="sponsor-wrapper">
            <img src="/theme4.jpg" alt="Sponsor Logo 4" className="sponsor-logo" />
            <div className="sponsor-description">Fintech</div>
          </div>
          {/* Add more sponsors as needed */}
        </div>
      </div>
      {/* Add more project themes as needed */}
    </div>
  );
};

export default ProjectThemes;
