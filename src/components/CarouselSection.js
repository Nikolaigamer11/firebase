// src/components/CarouselSection.js

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './CarouselSection.css';

function CarouselSection() {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
    pauseOnHover: true,
  };

  return (
    <div
      className={`carousel-section ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        <div className="carousel-item">
          <div className="carousel-content">
            <h3>Marketing</h3>
            <p>There are many variations of passages of lorem Ipsum...</p>
          </div>
          <div className="carousel-image" />
        </div>
        <div className="carousel-item">
          <div className="carousel-content">
            <h3>Branding</h3>
            <p>There are many variations of passages of lorem Ipsum...</p>
          </div>
          <div className="carousel-image" />
        </div>
        <div className="carousel-item">
          <div className="carousel-content">
            <h3>Design</h3>
            <p>There are many variations of passages of lorem Ipsum...</p>
          </div>
          <div className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselSection;
