import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <div className="sponsors-container theme-border">
      <h2 className="section-heading">Our Sponsors</h2>
      <div className="sponsors-list">
        <img src="/sponsor2.png" alt="Sponsor 1" className="sponsor-logo" />
        <img src="/sponsor1.jpg" alt="Sponsor 2" className="sponsor-logo" />
        <img src="/sponsor3.png" alt="Sponsor 3" className="sponsor-logo" />
        <img src="/sponsor4.jpg" alt="Sponsor 4" className="sponsor-logo" />
        <img src="/sponsor5.jpg" alt="Sponsor 5" className="sponsor-logo" />
        <img src="/sponsor6.jpg" alt="Sponsor 6" className="sponsor-logo" />
      </div>
    </div>
  );
};

export default Sponsors;
