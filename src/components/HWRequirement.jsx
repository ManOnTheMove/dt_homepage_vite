import React from 'react';
import { hwRequirementTools } from '../config/hwRequirementTools';
import './HWRequirement.css';

const HWRequirement = () => {
  const handleEnterClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="hw-requirement-container">
      <h1 className="page-title">HW requirement</h1>
      <div className="hero-cards-container">
        {hwRequirementTools.map((tool) => (
          <div key={tool.id} className="hero-card">
            <div className="card-content">
              <h2 className="tool-name">{tool.toolName}</h2>
              {tool.responsible && (
                <p className="responsible">{tool.responsible}</p>
              )}
              <p className="description">{tool.description}</p>
              <button 
                className="enter-button"
                onClick={() => handleEnterClick(tool.link)}
              >
                Enter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HWRequirement;
