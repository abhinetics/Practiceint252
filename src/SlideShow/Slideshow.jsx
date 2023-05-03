import { useState, useEffect } from 'react';

function Slideshow(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const timerID = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % props.images.length); 
    }, props.interval);

    return () => clearInterval(timerID);
  }, [props.interval, props.images.length]);

  return (
    <div>
      <img src={props.images[currentSlide]} alt={`slide ${currentSlide}`} />
    </div>
  );
}

export default Slideshow;
