import React, { useState } from 'react';
import './Featured.css';

const Featured = () => {
  // State to manage which answer is visible
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  // Function to toggle visibility of answers
  const toggleAnswer = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  return (
    <section className='Featured' id='Featured'>
      <div className="image-container">
        <img src="/assets/images/featured.jpg" alt="featured" />
        <div className="icon-box">
          <img src="/assets/images/featured-icon.png" alt="featured-icon" />
        </div>
      </div>
      <div className="text-container">
        <span>Featured</span>
        <h3>Best Apartment & Sea View</h3>
        <div className="links-box">
          <h6 onClick={() => toggleAnswer(0)}>Best useful links ?</h6>
          {visibleAnswer === 0 && (
            <p>
              Get <strong>the best villa</strong> website template in HTML CSS
              and Bootstrap for your business. TemplateMo provides you the 
              <a href="#">best free CSS templates</a> in the world. Please tell your friends about it.
            </p>
          )}

          <h5 onClick={() => toggleAnswer(1)}>How does this work ?</h5>
          {visibleAnswer === 1 && (
            <p>
              Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}

          <h5 onClick={() => toggleAnswer(2)}>Why is Villa Agency the best ?</h5>
          {visibleAnswer === 2 && (
            <p>
              Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}
        </div>
      </div>
      <div className="box-container">
        <div className="boxes">
          <div className="box">
            <img src="/public/assets/images/info-icon-01.png" alt="info-icon-01" />
            <div className="text">
              <h6>250 m2</h6>
              <p>Total Flat Space</p>
            </div>
          </div>

          <div className="box">
            <img src="/public/assets/images/info-icon-02.png" alt="info-icon-02" />
            <div className="text">
              <h6>Contract</h6>
              <p>Contract Ready</p>
            </div>
          </div>

          <div className="box">
            <img src="/public/assets/images/info-icon-03.png" alt="info-icon-03" />
            <div className="text">
              <h6>Payment</h6>
              <p>Payment Process</p>
            </div>
          </div>

          <div className="box">
            <img src="/public/assets/images/info-icon-04.png" alt="info-icon-04" />
            <div className="text">
              <h6>Safety</h6>
              <p>24/7 Under Control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
