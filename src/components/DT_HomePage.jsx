import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DT_HomePage.css';

const DT_HomePage = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/system-engineering');
  };
  
  return (
    <div 
      className="dt-homepage-container" 
      onClick={handleClick}
      role="button"
      aria-label="Go to System Engineering"
      tabIndex={0}
    />
  );
};

export default DT_HomePage;


// OSS-CN DT/AI Homepage 