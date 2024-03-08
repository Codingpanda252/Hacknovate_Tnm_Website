// Parallax.js

import React from 'react';
import { Parallax as ReactParallax } from 'react-parallax';
import './Parallax.css'; // Import the Parallax CSS

const Parallax = () => {
  return (
    <ReactParallax bgImage="/bgImage.jpg" strength={500} className="parallax-bg"> {/* Add the parallax-bg class */}
      <section id="home" className="dark-bg">
        <div className="container mx-auto p-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to BYTE Tech Society</h2>
          <p className="text-lg mb-8">Empowering Innovation in Technology</p>
        </div>
      </section>
    </ReactParallax>
  );
};

export default Parallax;
