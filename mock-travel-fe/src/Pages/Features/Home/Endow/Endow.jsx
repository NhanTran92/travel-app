import React, { useState, useEffect } from 'react';
import './Endow.scss';



const images = [
    'https://media.travel.com.vn/Advertisings/bn_230714_BannerWeb-TOURCHATGIATOT_My.webp',
    'https://media.travel.com.vn/Advertisings/bn_230721_BANNER%20WEB_HA%20TIEN_412X309.webp',
    'https://media.travel.com.vn/Advertisings/bn_230714_BannerWeb-TOURCHATGIATOT_PhanThiet.webp',
  
    'https://media.travel.com.vn/Advertisings/bn_230714_Banner_ThaiLan-ParisByNight_412-309px.webp',
    'https://media.travel.com.vn/Advertisings/bn_230714_BannerWeb-TOURCHATGIATOT_PhuQuoc.webp',
    'https://media.travel.com.vn/Advertisings/bn_230714_BannerWeb-TOURCHATGIATOT_My.webp',
  
    'https://media.travel.com.vn/Advertisings/bn_230721_BANNER%20WEB_HA%20TIEN_412X309.webp',
   
];

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSlideCount((prevCount) => prevCount + 1);
      }, 3000);
  
      return () => clearInterval(timer);
    }, []);
  
    useEffect(() => {
      if (slideCount >= images.length) {
        setCurrentIndex(0);
        setSlideCount(0);
      }
    }, [slideCount]);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setSlideCount((prevCount) => prevCount + 1);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setSlideCount((prevCount) => prevCount + 1);
    };
  
    return (
      <div className="slide">
        <div className='sl-4'>
            <h3>Ưu đãi</h3>
        </div>
        <div className="images-container">
          {images.slice(currentIndex, currentIndex + 3).map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Slide ${currentIndex + index + 1}`}
              className={`image ${index === 1 ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="navigation">
          <button onClick={handlePrev}>&#10094;</button>
          <button onClick={handleNext}>&#10095;</button>
        </div>
      </div>
    );
  };
  
  export default Slide;



