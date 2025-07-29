import React from 'react';

const VideoTemplate = ({ src, className = "", width = "70%", aspectRatio = "40%" }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-3 relative overflow-hidden" style={{ width: width, paddingBottom: aspectRatio }}>
        <iframe
          style={{ borderRadius: '50px' }}
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="snowboard"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoTemplate;



// reel code 1042311897
// Chill code 1042456040