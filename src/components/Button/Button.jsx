import React from 'react';
import './Button.css';

const Button = ({ text, icon, semicircular, onClick }) => {
  return (
    <button className="primary-btn" onClick={onClick}>
      <div
        className="container" 
        style={{ borderRadius: semicircular ? '200px' : '8px' }}
      >
        {icon && <i className="fa-solid fa-calendar"></i>}
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Button;
