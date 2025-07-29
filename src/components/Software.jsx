import React from 'react';
import { useNavigate } from 'react-router-dom';
import { componentRequirementsTools } from '../config/componentRequirementsTools';
import { swArchitectureTools } from '../config/swArchitectureTools';
import { swIntegrationTestTools } from '../config/swIntegrationTestTools';
import { swRequirementTestTools } from '../config/swRequirementTestTools';
import { swDesignTools } from '../config/swDesignTools';
import { swImplementationTools } from '../config/swImplementationTools';
import { swConfigurationTools } from '../config/swConfigurationTools';
import PageLayout from './PageLayout';
import logoSvg from '../logo.svg';

const Software = () => {
  const navigate = useNavigate();

  const pageConfig = {
    pageTitle: 'Software',
    leftSection: { title: 'Requirements & Architecture', buttons: ['Component Requirements', 'SW Architecture'] },
    rightSection: { title: 'Testing & Validation', buttons: ['SW Integration and Test', 'SW Requirement Test'] },
    bottomSection: { title: 'Design & Implementation', buttons: ['SW Design', 'Implementation', 'Configuration'] },
  };

  const getLogoUrl = (link) => {
    try {
      const url = new URL(link);
      return `${url.origin}/favicon.ico`;
    } catch {
      return logoSvg;
    }
  };

  // Get the appropriate tools configuration for each button
  const getToolsForButton = (buttonName) => {
    switch (buttonName) {
      case 'Component Requirements':
        return componentRequirementsTools;
      case 'SW Architecture':
        return swArchitectureTools;
      case 'SW Integration and Test':
        return swIntegrationTestTools;
      case 'SW Requirement Test':
        return swRequirementTestTools;
      case 'SW Design':
        return swDesignTools;
      case 'Implementation':
        return swImplementationTools;
      case 'Configuration':
        return swConfigurationTools;
      default:
        return [];
    }
  };

  const renderCustomSoftwareButton = (buttonName, index, handleButtonClick) => {
    // For 'SW Requirement Test' button, don't show any tools
    const showTools = buttonName !== 'SW Requirement Test';
    const tools = showTools ? getToolsForButton(buttonName) : [];
    const hasTools = showTools && tools && tools.length > 0;

    const onButtonClick = () => {
      switch (buttonName) {
        case 'Component Requirements':
          navigate('/component-requirements');
          break;
        case 'SW Architecture':
          navigate('/sw-architecture');
          break;
        case 'SW Integration and Test':
          navigate('/sw-integration-test');
          break;
        case 'SW Requirement Test':
          navigate('/system-test-sw-testing');
          break;
        case 'SW Design':
          navigate('/sw-design');
          break;
        case 'Implementation':
          navigate('/sw-implementation');
          break;
        case 'Configuration':
          navigate('/sw-configuration');
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
      renderCustomButton={renderCustomSoftwareButton}
    />
  );
};

export default Software;
