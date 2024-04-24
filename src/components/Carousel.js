import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../images/image1.png';
import Image2 from '../images/SahilGulati.jpg';
import Image3 from '../images/Hacknovate.png';
import Video4 from '../videos/HacknovateReel.mp4'; // Import the video file
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <ReactCarousel
        infiniteLoop
        autoPlay
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
      >
        <div>
          <img src={Image1} alt="Carousel 1" style={{ width: '1000px', height: '800px' }} />
        </div>
        <div>
          <img src={Image2} alt="Carousel 2" style={{ width: '1000px', height: '800px' }} />
        </div>
        <div>
          <img src={Image3} alt="Carousel 3" style={{ width: '1000px', height: '800px' }} />
        </div>
        <div>
          <video autoPlay loop muted style={{ width: '1000px', height: '800px' }}>
            <source src={Video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
