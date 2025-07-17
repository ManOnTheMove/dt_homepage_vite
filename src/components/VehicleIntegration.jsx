import React from 'react';
import './VehicleIntegration.css';

const VehicleIntegration = () => {
  const buttons = [
    'Requirements',            // position-0: Top left
    'Definition',             // position-1: Center bottom (V bottom)
    'Crash Test',             // position-2: Second layer left
    'Evaluation',             // position-3: Third layer right
    'Release'                 // position-4: Top right
  ];

  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on ${buttonName}`);
    // Future functionality can be added here
  };

  return (
    <div className="vehicle-integration-container">
      <h1 className="page-title">Application: Vehicle Integration</h1>
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

export default VehicleIntegration;
