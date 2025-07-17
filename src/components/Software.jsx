import React from 'react';
import './Software.css';

const Software = () => {
  const buttons = [
    'SW Architecture',          // position-0: Top left
    'Component Requirements',   // position-1: Second layer left
    'SW Design',               // position-2: Third layer left
    'Implementation',          // position-3: Fourth layer left (V bottom left)
    'Configuration',           // position-4: Fourth layer right (V bottom right)
    'SW Integration and Test', // position-5: Third layer right
    'SW Requirement Test'      // position-6: Second layer right
  ];

  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on ${buttonName}`);
    // Future functionality can be added here
  };

  return (
    <div className="software-container">
      <h1 className="page-title">Software</h1>
      <div className="v-shape-container">
        {buttons.map((buttonName, index) => (
          <button
            key={index}
            className={`v-button position-${index}`}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Software;
