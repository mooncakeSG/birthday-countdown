import React from 'react';
import Slider from "react-slick";
import './SlideshowCSS.css';

const SlideshowCSS = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slideshow-dots"
  };

  const images = [
    {
      src: "/images/photo1.jpg",
      alt: "Beautiful moment 1"
    },
    {
      src: "/images/photo2.jpg", 
      alt: "Beautiful moment 2"
    },
    {
      src: "/images/photo3.jpg",
      alt: "Beautiful moment 3"
    },
    {
      src: "/images/photo4.jpg",
      alt: "Beautiful moment 4"
    },
    {
      src: "/images/photo5.jpg",
      alt: "Beautiful moment 5"
    },
    {
      src: "/images/photo6.jpg",
      alt: "Beautiful moment 6"
    },
    {
      src: "/images/photo7.jpg",
      alt: "Beautiful moment 7"
    }
  ];

  return (
    <div className="slideshow-container-center">
      {/* Card wrapper */}
      <div className="slideshow-card">
        {/* Card header */}
        <div className="slideshow-header">
          <h2 className="slideshow-title">
            💕 Moments 💕
          </h2>
        </div>

        {/* Slideshow container */}
        <div className="slideshow-content">
          <div className="slideshow-wrapper">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="slideshow-slide">
                  <div className="slideshow-image-container">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="slideshow-image"
                    />
                    <div className="slideshow-overlay"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Bottom section with heart animation */}
        <div className="slideshow-footer">
          <div className="slideshow-heart-section">
            <span className="slideshow-text">Made with</span>
            <div className="slideshow-heart">
              ❤️
            </div>
            <span className="slideshow-text">for you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideshowCSS; 