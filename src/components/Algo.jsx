import React from 'react';
import './Algo.css';

const Algo = () => {
  const buttons = [
    'Prototype',                // position-0: Top left
    'Algo Requirements',        // position-1: Second layer left
    'Algo Architecture',        // position-2: Third layer left
    'Algo Unit Design',         // position-3: Fourth layer left
    'Implementation',           // position-4: V bottom left
    'Algo Unit Test',          // position-5: V bottom right
    'Algo Integration',         // position-6: Fourth layer right
    'Algo Integration test',    // position-7: Third layer right
    'Algo Requirement Test'     // position-8: Second layer right
  ];

  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on ${buttonName}`);
    // Future functionality can be added here
  };

  return (
    <div className="algo-container">
      <h1 className="page-title">Algo</h1>
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

export default Algo;
