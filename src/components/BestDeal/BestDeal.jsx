import React, { useState } from 'react';
import './BestDeal.css';
import Button from '../Button/Button';
import { categoryContent } from '../../data/Data'; 

const BestDeal = () => {
  const [selectedCategory, setSelectedCategory] = useState('Apartment');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const currentContent = categoryContent[selectedCategory];

  return (
    <section className='BestDeal' id='BestDeal'>
      <div className="header">
        <div className="text-container">
          <span>Best Deal</span>
          <h3>Find Your Best Deal Right Now!</h3>
        </div>
        <div className="btns-container">
          {Object.keys(categoryContent).map(category => (
            <Button
              key={category}
              text={category}
              icon={false}
              semicircular={false}
              onClick={() => handleCategoryChange(category)}
            />
          ))}
        </div>
      </div>

      <div className="body-container">
        <div className="box-container">
          <div className="boxes">
            {currentContent.boxes.map((box, index) => (
              <div key={index} className="box">
                <h6>{box.title}</h6>
                <p>{box.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="image-container">
          <img src={currentContent.imgSrc} alt="property" />
        </div>

        <div className="info-container">
          <h6>Extra Info About Property</h6>
          <p>{currentContent.text1}</p>
          <p>{currentContent.text2}</p>
          <Button text='Schedule a visit' icon={true} semicircular={true} />
        </div>
      </div>
    </section>
  );
}

export default BestDeal;
