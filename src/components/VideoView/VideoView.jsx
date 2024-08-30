// src/VideoView.jsx
import React from 'react';
import './VideoView.css';
import { boxData } from '../../data/data';

const VideoView = () => {
  return (
    <section className='VideoView' id='videoView'>
      <div className="image-container">
        <img src="assets/images/VideoView.jpg" alt="VideoView" />
        <div className="content-container">
          <div className="text-container">
            <span>VideoView</span>
            <h3>Get Closer View & Different Feeling</h3>
          </div>
          <div className="video-container">
            <img src="assets/images/video-frame.jpg" alt="video-frame" />
            <div className="play-video-icon">
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="boxes">
          {boxData.map((item, index) => (
            <div className="box" key={index}>
              <span id='dot'></span>
              <span>{item.count}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoView;
