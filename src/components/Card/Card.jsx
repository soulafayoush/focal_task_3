import React from 'react';
import Button from '../Button/Button';
import './Card.css';
import PropTypes from 'prop-types'; 

const Card = ({ img, type, prise, location, bedrooms, bathrooms, area, floor, parking }) => {
  return (
    <div className="Card">
      <div className="header">
        <img src={img} alt={type} className="card-image" />
      </div>
      <div className="body">
        <div className="prise-box">
          <span className="type">{type}</span>
          <span className="prise">{prise}</span>
        </div>
        <p className="location">{location}</p>
        <div className="details-box">
          <p className="bedrooms">Bedrooms: <span>{bedrooms}</span></p>
          <p className="bathrooms">Bathrooms: <span>{bathrooms}</span></p>
          <p className="area">Area: <span>{area}</span></p>
          <p className="floor">Floor: <span>{floor}</span></p>
          <p className="parking">Parking: <span>{parking}</span></p>
        </div>
      </div>
      <div className="footer">
        <Button text="Schedule a visit" icon={false} semicircular={true} />
      </div>
    </div>
  );
};


Card.propTypes = {
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  prise: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  floor: PropTypes.string.isRequired,
  parking: PropTypes.string.isRequired,
};

export default Card;
