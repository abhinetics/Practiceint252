import React, { useState } from 'react';
import image1 from './image1.jpg';
import image2 from './image2.webp';
import image3 from './image3.jpg';

const ImageSlid = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];
  
  const handlePreviousClick = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };
  
  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };
  
  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ImageSlid;
