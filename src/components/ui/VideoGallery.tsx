"use client";

import React from 'react';

interface VideoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

interface VideoGalleryProps {
  videos: VideoProps[];
  className?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos, className }) => {
  if (!videos || videos.length === 0) {
    return <p>No videos to display.</p>;
  }

  return (
    <div className={`grid grid-cols-1 gap-4 ${className}`}>
      {videos.map((video, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <video
            src={video.src}
            width={video.width}
            height={video.height} 
            autoPlay={true}  
            loop={true} 
            muted
            playsInLine={true} 
            className={`w-full h-auto object-cover ${video.className}`}
            aria-label={video.alt}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
