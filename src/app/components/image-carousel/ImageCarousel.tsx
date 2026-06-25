import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";
// Adapted code from https://learnmodernjavascript.com/build-a-simple-react-image-carousel-a-step-by-step-guide/
function ImageCarousel() {
  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image sources
  const images = ["/Karl.jpg", "/Karl2.jpg", "/Karl3.jpg"];

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-container relative w-full aspect-[4/3]">
        <Image
          src={images[currentImageIndex]}
          alt="Picture of Karl, my cat"
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="carousel-indicators mt-1">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default ImageCarousel;