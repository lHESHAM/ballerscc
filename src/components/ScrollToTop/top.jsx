import React, { useState, useEffect } from 'react';
import { ArrowUpOutline } from 'react-ionicons'
import './top.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
    <ArrowUpOutline
    color={'#ddd'}  
    height="25px"
    width="25px"
  />
  
    </div>
  );
};

export default ScrollToTopButton;
