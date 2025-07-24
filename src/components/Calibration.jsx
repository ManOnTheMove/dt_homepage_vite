import React from 'react';
import { useNavigate } from 'react-router-dom';
import { crashDataTools } from '../config/crashDataTools';
import { calRequirementsTools } from '../config/calRequirementsTools';
import { calRequirementTestTools } from '../config/calRequirementTestTools';
import { calIntegrationTestTools } from '../config/calIntegrationTestTools';
import { calReleaseTools } from '../config/calReleaseTools';
import { calibrationTools } from '../config/calibrationTools';
import PageLayout from './PageLayout';
import logoSvg from '../logo.svg';

const Calibration = () => {
  const navigate = useNavigate();

  const pageConfig = {
    pageTitle: 'Application: Calibration',
    leftSection: { title: 'Data & Requirements', buttons: ['Crash Data', 'Requirements'] },
    rightSection: { title: 'Testing & Release', buttons: ['Cal. Requirement Test', 'Integration Test', 'Release'] },
    bottomSection: { title: 'Implementation', buttons: ['Calibration'] },
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
      case 'Crash Data':
        return crashDataTools;
      case 'Requirements':
        return calRequirementsTools;
      case 'Cal. Requirement Test':
        return calRequirementTestTools;
      case 'Integration Test':
        return calIntegrationTestTools;
      case 'Release':
        return calReleaseTools;
      case 'Calibration':
        return calibrationTools;
      default:
        return [];
    }
  };

  const renderCustomCalibrationButton = (buttonName, index, handleButtonClick) => {
    const tools = getToolsForButton(buttonName);
    const hasTools = tools && tools.length > 0;

    const onButtonClick = () => {
      switch (buttonName) {
        case 'Crash Data':
          navigate('/crash-data');
          break;
        case 'Requirements':
          navigate('/cal-requirements');
          break;
        case 'Cal. Requirement Test':
          navigate('/cal-requirement-test');
          break;
        case 'Integration Test':
          navigate('/cal-integration-test');
          break;
        case 'Release':
          navigate('/cal-release');
          break;
        case 'Calibration':
          navigate('/calibration-component');
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
      renderCustomButton={renderCustomCalibrationButton}
    />
  );
};

export default Calibration;
