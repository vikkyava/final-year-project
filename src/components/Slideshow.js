import React, { useState, useEffect } from 'react';
import classes from './Slideshow.module.css';

const Slideshow = () => {
    const slides = [
        { url: 'https://example.com/path_to_image1.jpg', text: 'Your Bright Future is Our Mission' },
        { url: 'https://example.com/path_to_image2.jpg', text: 'Education is Life' },
        { url: 'https://example.com/path_to_image3.jpg', text: 'Helping Our Students Fulfill Their Potential' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [slides.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={classes.slideshow}>
            <div
                className={classes.slide}
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            >
                <div className={classes.overlay}>
                    {slides[currentIndex].text}
                </div>
            </div>
            <button className={`${classes.navbtn} ${classes.prevbtn}`} onClick={goToPrevious}>❮</button>
            <button className={`${classes.navbtn} ${classes.nextbtn}`} onClick={goToNext}>❯</button>
            <div className={classes.indicators}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${classes.indicator} ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;