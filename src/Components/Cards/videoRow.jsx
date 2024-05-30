// src/VideoRow.js
import React, { useState, useEffect, useRef } from 'react';
import VideoCard from './videoCard';
import './videoRow.css';
import PropTypes from 'prop-types';

function VideoRow({ jsonFilePath }) {
  const [videos, setVideos] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(jsonFilePath);
        const data = await response.json();
        const data2 = data.results;
        setVideos(data2);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [jsonFilePath]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
    <div className="video-row-container">
      <button className="scroll-button left" onClick={scrollLeft}>{"<"}</button>
      <div className="video-row" ref={scrollContainerRef}>
        {videos.map((video, index) => (
          <VideoCard key={index} image={video.image} title={video.name} />
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>{">"}</button>
    </div>
    </div>
  );
}

VideoRow.propTypes = {
  jsonFilePath: PropTypes.string.isRequired,
};

export default VideoRow;
