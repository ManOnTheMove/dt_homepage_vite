import React from 'react';
import { useNavigate } from 'react-router-dom';
import { hwRequirementTools } from '../config/hwRequirementTools';
import { hwArchitectureTools } from '../config/hwArchitectureTools';
import { hwDesignTestTools } from '../config/hwDesignTestTools';
import { hwIntegrationTestTools } from '../config/hwIntegrationTestTools';
import { hwModuleDesignTools } from '../config/hwModuleDesignTools';
import { ecuCircuitDesignTools } from '../config/ecuCircuitDesignTools';
import { implementationTools } from '../config/implementationTools';
import PageLayout from './PageLayout';
import logoSvg from '../logo.svg';

const getLogoUrl = (link) => {
  try {
    const url = new URL(link);
    return `${url.origin}/favicon.ico`;
  } catch {
    return logoSvg;
  }
};

const Hardware = () => {
  const navigate = useNavigate();

  const pageConfig = {
    pageTitle: 'Hardware',
    leftSection: { title: 'Requirements & Architecture', buttons: ['HW requirements', 'HW Architecture'] },
    rightSection: { title: 'Testing & Validation', buttons: ['HW design test', 'HW integration Test & Requirement Test'] },
    bottomSection: { title: 'Design & Implementation', buttons: ['HW-Module Design', 'ECU Circuit Design', 'Implementation'] },
  };

  // Get the appropriate tools configuration for each button
  const getToolsForButton = (buttonName) => {
    switch (buttonName) {
      case 'HW requirements':
        return hwRequirementTools;
      case 'HW Architecture':
        return hwArchitectureTools;
      case 'HW design test':
        return hwDesignTestTools;
      case 'HW integration Test & Requirement Test':
        return hwIntegrationTestTools;
      case 'HW-Module Design':
        return hwModuleDesignTools;
      case 'ECU Circuit Design':
        return ecuCircuitDesignTools;
      case 'Implementation':
        return implementationTools;
      default:
        return [];
    }
  };

  const renderCustomHardwareButton = (buttonName, index, handleButtonClick) => {
    const tools = getToolsForButton(buttonName);
    const hasTools = tools && tools.length > 0;

    const onButtonClick = () => {
      switch (buttonName) {
        case 'HW requirements':
          navigate('/hw-requirement');
          break;
        case 'HW Architecture':
          navigate('/hw-architecture');
          break;
        case 'HW design test':
          navigate('/hw-design-test');
          break;
        case 'HW integration Test & Requirement Test':
          navigate('/hw-integration-test');
          break;
        case 'HW-Module Design':
          navigate('/hw-module-design');
          break;
        case 'ECU Circuit Design':
          navigate('/ecu-circuit-design');
          break;
        case 'Implementation':
          navigate('/implementation');
          break;
        default:
          alert(`Navigation for ${buttonName} is not configured yet.`);
      }
    };

    return (
      <button
        key={index}
        className={`layout-button ${hasTools ? 'with-circles' : ''}`}
        onClick={onButtonClick}
      >
        <span>{buttonName}</span>
        {hasTools && (
          <div className="circle-row">
            {tools.slice(0, 4).map((tool) => (
              <div
                key={tool.id}
                className="circle"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(tool.link, '_blank');
                }}
                title={`${tool.toolName} - ${tool.description}`}
              >
                <img
                  src={getLogoUrl(tool.link)}
                  alt={`${tool.toolName} logo`}
                  onError={(e) => { e.target.onerror = null; e.target.src = logoSvg; }}
                />
              </div>
            ))}
          </div>
        )}
      </button>
    );
  };

  return (
    <PageLayout
      pageTitle={pageConfig.pageTitle}
      leftSection={pageConfig.leftSection}
      rightSection={pageConfig.rightSection}
      bottomSection={pageConfig.bottomSection}
      pageClassName="secondary-page"
      renderCustomButton={renderCustomHardwareButton}
    />
  );
};

export default Hardware;
