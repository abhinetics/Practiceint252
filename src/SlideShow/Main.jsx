import React from 'react';
import Slideshow from './Slideshow';

function Main() {
  const images = ['https://plus.unsplash.com/premium_photo-1666997726532-33f671ca24c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80', 'https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80', 'https://images.unsplash.com/photo-1619669906274-d379128eaa59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'];
    //set height and width of images

  return (
    <div>
      <h1>My Slideshow</h1>
      <Slideshow images={images} interval={3000} />
    </div>
  );
}

export default Main;
