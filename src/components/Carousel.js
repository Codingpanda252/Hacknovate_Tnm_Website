import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../images/image1.png';
import Image2 from '../images/image2.png';
import Image3 from '../images/image3.jpg';
import Image4 from '../images/image4.png'; // Add the import for the new image
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
          <img src={Image4} alt="Carousel 4" style={{ width: '1000px', height: '800px' }} />
        </div>
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
