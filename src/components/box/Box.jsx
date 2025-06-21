import React, { useEffect, useState } from 'react';
import './Box.css'; // Make sure filename matches exactly

const Box = () => {
  const [scrolledHalfway, setScrolledHalfway] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrolledPastHalf = scrollTop > (docHeight - winHeight) / 2;
      setScrolledHalfway(scrolledPastHalf);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a href="#">
      <div className={`floating-box ${scrolledHalfway ? 'move-up' : ''}`}>
        ↑
      </div>
    </a>
  );
};

export default Box;
