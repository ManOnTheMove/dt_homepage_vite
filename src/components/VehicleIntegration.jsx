import React from 'react';
import { useNavigate } from 'react-router-dom';
import { viRequirementsTools } from '../config/viRequirementsTools';
import { viDefinitionTools } from '../config/viDefinitionTools';
import { viEvaluationTools } from '../config/viEvaluationTools';
import { viReleaseTools } from '../config/viReleaseTools';
import { viCrashTestTools } from '../config/viCrashTestTools';
import PageLayout from './PageLayout';
import logoSvg from '../logo.svg';

const VehicleIntegration = () => {
  const navigate = useNavigate();

  const pageConfig = {
    pageTitle: 'Application: Vehicle Integration',
    leftSection: { title: 'Planning & Requirements', buttons: ['Requirements', 'Definition'] },
    rightSection: { title: 'Validation & Release', buttons: ['Evaluation', 'Release'] },
    bottomSection: { title: 'Testing & Verification', buttons: ['Crash Test'] },
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
      case 'Requirements':
        return viRequirementsTools;
      case 'Definition':
        return viDefinitionTools;
      case 'Evaluation':
        return viEvaluationTools;
      case 'Release':
        return viReleaseTools;
      case 'Crash Test':
        return viCrashTestTools;
      default:
        return [];
    }
  };

  const renderCustomVIButton = (buttonName, index, handleButtonClick) => {
    const tools = getToolsForButton(buttonName);
    const hasTools = tools && tools.length > 0;

    const onButtonClick = () => {
      switch (buttonName) {
        case 'Requirements':
          navigate('/vi-requirements');
          break;
        case 'Definition':
          navigate('/vi-definition');
          break;
        case 'Evaluation':
          navigate('/vi-evaluation');
          break;
        case 'Release':
          navigate('/vi-release');
          break;
        case 'Crash Test':
          navigate('/vi-crash-test');
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
      renderCustomButton={renderCustomVIButton}
    />
  );
};

export default VehicleIntegration;
