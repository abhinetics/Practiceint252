import { useState, useEffect } from 'react';

const images = ['https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80', 'https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80', 'https://images.unsplash.com/photo-1619669906274-d379128eaa59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'];


function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // This function will run every 5 seconds
    const intervalId = setInterval(() => {
      // Increment the index of the current image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <img src={images[currentImageIndex]} alt="slider" />
  );
}

export default ImageSlider;
