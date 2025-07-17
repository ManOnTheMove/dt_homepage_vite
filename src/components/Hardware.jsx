import React from 'react';
import { useNavigate } from 'react-router-dom';
import { hwRequirementTools } from '../config/hwRequirementTools';
import './Hardware.css';

import logoSvg from '../logo.svg';


const getLogoUrl = (link) => {
  try {
    const url = new URL(link);
    // Attempt to fetch the favicon of the site
    return `${url.origin}/favicon.ico`;
  } catch {
    return logoSvg;
  }
};

const Hardware = () => {
  const navigate = useNavigate();
  
  const buttons = [
    'HW requirements',           // position-0: Top left
    'HW Architecture',          // position-1: Second layer left
    'HW-Module Design',         // position-2: Third layer left  
    'ECU Circuit Design',       // position-3: Fourth layer left
    'Implementation',           // position-4: Center bottom (V bottom)
    'HW design test',           // position-5: Fourth layer right
    'HW integration Test & Requirement Test'  // position-6: Third layer right
  ];

  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on ${buttonName}`);
    
    // Navigate to specific pages based on button clicked
    if (buttonName === 'HW requirements') {
      navigate('/hw-requirement');
    }
    // Future functionality for other buttons can be added here
  };

  return (
    <div className="hardware-container">
      <h1 className="page-title">Hardware</h1>
      <div className="v-shape-container">
        {buttons.map((buttonName, index) => {
          const isHWReq = index === 0;
          return (
            <button
              key={index}
              className={`v-button position-${index} ${isHWReq ? 'with-circles' : ''}`}
              onClick={() => handleButtonClick(buttonName)}
            >
              <span>{buttonName}</span>
              {isHWReq && (
                <div className="circle-row">
                  {hwRequirementTools.slice(0, 4).map((tool) => (
                    <div
                      key={tool.id}
                      className="circle"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(tool.link, '_blank');
                      }}
                    >
                      <img
                        src={getLogoUrl(tool.link)}
                        alt={`${tool.toolName} logo`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = logoSvg;
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default Hardware;
