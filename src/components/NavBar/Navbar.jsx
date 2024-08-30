import React, { useState } from 'react';
import './NavBar.css';
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isMobileNavVisible, setMobileNavVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('#Home');

  
    const showMobileNav = () => {
        setMobileNavVisible(!isMobileNavVisible);
    };

  
    const handleLinkClick = (href) => {
      setActiveLink(href);
      if (isMobileNavVisible) {
          showMobileNav(); 
      }
  };
    return (
        <>
            <nav>
                <div className="desktop-nav">
                    <div className="header">
                        <div className="company-info">
                            <div className="items">
                                <div className="email">
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>info@company.com</span>
                                </div>
                                <div className="map">
                                    <i className="fa-solid fa-map"></i>
                                    <span>Sunny Isles Beach, FL 33160</span>
                                </div>
                            </div>
                        </div>
                        <div className="social-media">
                            <ul>
                                <li><i className="fa-brands fa-facebook"></i></li>
                                <li><i className="fa-brands fa-twitter"></i></li>
                                <li><i className="fa-brands fa-linkedin"></i></li>
                                <li><i className="fa-brands fa-instagram"></i></li>
                             
                             
                            </ul>
                        </div>
                    </div>
                    <div className="main-nav">
                        <div className="logo">
                            <h2>VILLA</h2>
                        </div>
                        <div className="nav-menu">
                        <ul>
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleLinkClick('#Home')}>Home</NavLink></li>
                                <li><NavLink to="/Properties" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleLinkClick('#Properties')}>Properties</NavLink></li>
                                <li><NavLink to="/PropertyDetails" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleLinkClick('#PropertyDetails')}>PropertyDetails</NavLink></li>
                                <li><NavLink to="/ContactUs" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleLinkClick('#ContactUs')}>ContactUs</NavLink></li>
                                <li><Button text='Schedule a visit' icon={true} semicircular={true} /></li>
                            </ul>
                            <button className='menu-btn' onClick={showMobileNav}><i className='fas fa-bars'></i></button>
                        </div>
                    </div>
                </div>
            </nav>

     
            <div className={`nav-mobile ${isMobileNavVisible ? 'active' : ''}`}>
                <div className="nav-menu">
                <ul>
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleLinkClick('#Home')}>Home</NavLink></li>
                                <li><NavLink to="/Properties" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleLinkClick('#Properties')}>Properties</NavLink></li>
                                <li><NavLink to="/PropertyDetails" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleLinkClick('#PropertyDetails')}>PropertyDetails</NavLink></li>
                                <li><NavLink to="/ContactUs" className={({ isActive }) => isActive ? "active" : ""} onClick={() => handleLinkClick('#ContactUs')}>ContactUs</NavLink></li>
                                <li><Button text='Schedule a visit' icon={true} semicircular={true} /></li>
                            </ul>
                </div>
                <div className="company-info">
                    <div className="items">
                        <div className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <span>info@company.com</span>
                        </div>
                        <div className="map">
                            <i className="fa-solid fa-map"></i>
                            <span>Sunny Isles Beach, FL 33160</span>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <ul>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
