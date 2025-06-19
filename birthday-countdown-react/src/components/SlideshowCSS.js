import React, { useState } from 'react';
import Slider from "react-slick";
import './SlideshowCSS.css';

const SlideshowCSS = () => {
  const [imageErrors, setImageErrors] = useState({});

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
      alt: "Beautiful moment 1",
      fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY5YTllIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfkZYgQmVhdXRpZnVsIE1vbWVudCAxIPCfkZY8L3RleHQ+PC9zdmc+"
    },
    {
      src: "/images/photo2.jpg", 
      alt: "Beautiful moment 2",
      fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmVjZmVmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfkZYgQmVhdXRpZnVsIE1vbWVudCAyIPCfkZY8L3RleHQ+PC9zdmc+"
    },
    {
      src: "/images/photo3.jpg",
      alt: "Beautiful moment 3",
      fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDRhNWZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfkZYgQmVhdXRpZnVsIE1vbWVudCAzIPCfkZY8L3RleHQ+PC9zdmc+"
    },
    {
      src: "/images/photo4.jpg",
      alt: "Beautiful moment 4",
      fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY2YjlkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfkZYgQmVhdXRpZnVsIE1vbWVudCA0IPCfkZY8L3RleHQ+PC9zdmc+"
    },
    {
      src: "/images/photo5.jpg",
      alt: "Beautiful moment 5",
      fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY4ZmFiIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfkZYgQmVhdXRpZnVsIE1vbWVudCA1IPCfkZY8L3RleHQ+PC9zdmc+"
    },
    {
      src: "/images/photo6.jpg",
      alt: "Beautiful moment 6",
      fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZhOGNjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfkZYgQmVhdXRpZnVsIE1vbWVudCA2IPCfkZY8L3RleHQ+PC9zdmc+"
    },
    {
      src: "/images/photo7.jpg",
      alt: "Beautiful moment 7",
      fallback: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZjYmRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfkZYgQmVhdXRpZnVsIE1vbWVudCA3IPCfkZY8L3RleHQ+PC9zdmc+"
    }
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const handleImageLoad = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: false
    }));
  };

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
                      src={imageErrors[index] ? image.fallback : image.src}
                      alt={image.alt}
                      className="slideshow-image"
                      onError={() => handleImageError(index)}
                      onLoad={() => handleImageLoad(index)}
                      loading="lazy"
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