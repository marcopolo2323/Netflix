// src/VideoCard.js
import React from 'react';
import './videoCard.css';

function VideoCard({ image, title }) {
  return (
    <div className="video-card">
      <img src={image} alt={title} className="video-card__image" />
      <p className="video-card__title">{title}</p>
    </div>
  );
}

export default VideoCard;
