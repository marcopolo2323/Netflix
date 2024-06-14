import React, { useState, useEffect } from 'react';
import './VideoCarousel.css';

const VideoCarousel = ({ title, videosData }) => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    setVideos(videosData);
  }, [videosData]);

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <div className="video-carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <div className="video-carousel-container">
        <div className="video-carousel">
          <div className="video-thumbnails">
            {videos.map(video => (
              <div key={video.id} className="video-thumbnail" onClick={() => handleVideoClick(video.url)}>
                <img src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/0.jpg`} alt={video.title} />
              </div>
            ))}
          </div>
        </div>
        {currentVideo && (
          <div className="video-player">
            <button className="close-button" onClick={handleCloseVideo}>Cerrar</button>
            <iframe
              width="700"
              height="400"
              src={`https://www.youtube.com/embed/${currentVideo.split('v=')[1]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCarousel;
