import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout';
import logoSvg from '../logo.svg';
import { testDesignTools } from '../config/test/testDesignTools';
import { testSetupTools } from '../config/test/testSetupTools';
import { testExecutionTools } from '../config/test/testExecutionTools';
import { testReportTools } from '../config/test/testReportTools';

const SystemTestSWTesting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "System Test & SW Testing";
  }, []);

  // Define the page configuration with button to route mappings
  const pageConfig = {
    pageTitle: 'System Test & SW Testing',
    leftSection: { 
      title: '', 
      buttons: [] 
    },
    rightSection: { 
      title: '', 
      buttons: [] 
    },
    bottomSection: { 
      title: 'Test Execution & Report', 
      buttons: ['Test Design', 'Test Setup', 'Test Execution', 'Test Report'] 
    },
    // Map button names to their corresponding routes
    buttonPageMap: {
      'Test Design': '/test-design',
      'Test Setup': '/test-setup',
      'Test Execution': '/test-execution',
      'Test Report': '/test-report'
    }
  };

  // Get the appropriate tools configuration for each button
  const getToolsForButton = (buttonName) => {
    switch (buttonName) {
      case 'Test Design':
        return testDesignTools;
      case 'Test Setup':
        return testSetupTools;
      case 'Test Execution':
        return testExecutionTools;
      case 'Test Report':
        return testReportTools;
      default:
        return [];
    }
  };

  // Get favicon URL for a given link
  const getLogoUrl = (link) => {
    try {
      const url = new URL(link);
      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
    } catch {
      return logoSvg;
    }
  };

  // Custom button renderer that works with PageLayout
  const renderButton = (buttonName, index, handleButtonClick) => {
    const tools = getToolsForButton(buttonName);
    const hasTools = tools && tools.length > 0;

    return (
      <button
        key={index}
        className={`layout-button ${hasTools ? 'with-circles' : ''}`}
        onClick={() => handleButtonClick(buttonName)}
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
                  alt={tool.toolName}
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
  };

  return (
    <PageLayout 
      pageTitle={pageConfig.pageTitle}
      bottomSection={pageConfig.bottomSection}
      buttonPageMap={pageConfig.buttonPageMap}
      pageClassName="system-test-sw-testing simplified-layout"
      renderCustomButton={renderButton}
      simplifiedLayout={true}
    />
  );
};

export default SystemTestSWTesting;
