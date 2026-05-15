import React from 'react';
import './photo-reel.css';

const PhotoReel = () => {
  const baseImages = [
    "/photo-reel/Image_00274.jpg",
    "/photo-reel/Image_00285.jpg",
    "/photo-reel/Image_00279.jpg",
    "/photo-reel/Image_00143.jpg",
    "/photo-reel/Image_00346.jpg",
    "/photo-reel/Image_00363.jpg",   
  ];


  const displayImages = [...baseImages, ...baseImages];

  return (
    <div className="reel-wrapper">
      <div className="photo-reel-ticker">
        {displayImages.map((src, index) => (
          <div className="reel-slide" key={index}>
            <img 
              src={src} 
              className="reel-image" 
              alt={`Research gallery ${index}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoReel;