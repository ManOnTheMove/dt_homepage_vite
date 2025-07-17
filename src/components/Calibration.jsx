import React from 'react';
import './Calibration.css';

const Calibration = () => {
  const buttons = [
    'Crash Data',              // position-0: Top left
    'Requirements',            // position-1: Second layer left
    'Calibration',            // position-2: Center bottom (V bottom)
    'Cal. Requirement Test',   // position-3: Second layer right
    'Integration Test',        // position-4: Third layer right
    'Release'                 // position-5: Top right
  ];

  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on ${buttonName}`);
    // Future functionality can be added here
  };

  return (
    <div className="calibration-container">
      <h1 className="page-title">Application: Calibration</h1>
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

export default Calibration;
