import React, { useState, useEffect } from 'react';
import './Hero.css';
import Slide from '../Slide/Slide';

const Hero = ({ slidesData }) => {
    const [index, setIndex] = useState(0);


    const showSlide = (n) => {
        const totalSlides = slidesData.length;
        setIndex((n + totalSlides) % totalSlides);
    };


    useEffect(() => {
        const interval = setInterval(() => showSlide(index + 1), 5000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [index]);

    return (
        <div className="slider" id="Home">
            <div className="slides" style={{ transform: `translateX(${-index * 100}%)` }}>
                {slidesData.map((slide, idx) => (
                    <Slide key={idx} img={slide.img} text={slide.text} />
                ))}
            </div>
            <div className="controls">
                <button className="prev" onClick={() => showSlide(index - 1)} aria-label="Previous Slide">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="next" onClick={() => showSlide(index + 1)} aria-label="Next Slide">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <div className="indicators">
                {slidesData.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${index === idx ? 'active' : ''}`}
                        onClick={() => showSlide(idx)}
                        aria-label={`Slide ${idx + 1}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Hero;
