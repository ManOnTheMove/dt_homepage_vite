import React from 'react';
import { useNavigate } from 'react-router-dom';
import { hwRequirementTools } from '../config/hwRequirementTools';
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

  // 自定义按钮点击处理（用于HW requirements的特殊功能）
  const customButtonHandler = (buttonName) => {
    console.log(`Clicked on ${buttonName}`);
    
    if (buttonName === 'HW requirements') {
      navigate('/hw-requirement');
    } else {
      alert(`You clicked on: ${buttonName}`);
    }
  };

  // 页面配置
  const pageConfig = {
    pageTitle: 'Hardware',
    leftSection: {
      title: 'Requirements & Architecture',
      buttons: [
        'HW requirements',
        'HW Architecture'
      ]
    },
    rightSection: {
      title: 'Testing & Validation',
      buttons: [
        'HW design test',
        'HW integration Test & Requirement Test'
      ]
    },
    bottomSection: {
      title: 'Design & Implementation',
      buttons: [
        'HW-Module Design',
        'ECU Circuit Design',
        'Implementation'
      ]
    }
  };

  // 为HW requirements按钮添加工具圆圈的自定义渲染
  const CustomPageLayout = ({ pageTitle, leftSection, rightSection, bottomSection }) => {
    const renderCustomButton = (buttonName, index) => {
      const isHWReq = buttonName === 'HW requirements';
      
      return (
        <button
          key={index}
          className={`layout-button ${isHWReq ? 'with-circles' : ''}`}
          onClick={() => customButtonHandler(buttonName)}
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
    };

    const renderButtonGroup = (buttons, className) => (
      <div className={`button-group ${className}`}>
        {buttons.map((buttonName, index) => renderCustomButton(buttonName, index))}
      </div>
    );

    return (
      <div className="page-layout-container">
        <div className="main-content">
          <div className="left-sidebar">
            <h3 className="sidebar-title">{leftSection.title}</h3>
            {renderButtonGroup(leftSection.buttons, 'left-buttons')}
          </div>
          
          <div className="center-content">
            <h1 className="page-title">{pageTitle}</h1>
          </div>
          
          <div className="right-sidebar">
            <h3 className="sidebar-title">{rightSection.title}</h3>
            {renderButtonGroup(rightSection.buttons, 'right-buttons')}
          </div>
        </div>
        
        <div className="bottom-section">
          <h3 className="section-title">{bottomSection.title}</h3>
          {renderButtonGroup(bottomSection.buttons, 'bottom-buttons')}
        </div>
      </div>
    );
  };

  return (
    <CustomPageLayout
      pageTitle={pageConfig.pageTitle}
      leftSection={pageConfig.leftSection}
      rightSection={pageConfig.rightSection}
      bottomSection={pageConfig.bottomSection}
    />
  );
};

export default Hardware;
