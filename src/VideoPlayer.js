import React, { useState } from 'react';

const videos = [
  {
    name: 'Video 1',
    link: 'https://www.youtube.com/embed/1mvdW3_CGgY?si=kiHuas-1RcBj2-_H',
  },
  {
    name: 'Video 2',
    link: 'https://www.youtube.com/embed/cY4nGCw-JxY?si=Qxka_ppJS4lTs6_s',
  },
  {
    name: 'Video 3',
    link: 'https://www.youtube.com/embed/ILktQQxGXHE?si=GhgH_Eo2OfZIH_ku',
  },
  {
    name: 'Video 4',
    link: 'https://www.youtube.com/embed/IzC9EzDNL50?si=kg7T5EKQZwSx6ul2',
  },
];

const VideoPlayer = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const handleVideoChange = (index) => {
    setSelectedVideoIndex(index);
  };

  return (
    <div className="container mt-5">
    <h4 className='mb-5'>Video Player</h4>
      <div className="row">
        <div className="col-md-6">
          <iframe
            title="Video Player"
            width="560"
            height="315"
            src={videos[selectedVideoIndex].link}
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-6">
          <div className="form-check">
            {videos.map((video, index) => (
              <div key={index} className="mb-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="video"
                  value={index}
                  checked={selectedVideoIndex === index}
                  onChange={() => handleVideoChange(index)}
                />
                <label className="form-check-label" style={{marginRight: '420px' }}>
                  {video.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;