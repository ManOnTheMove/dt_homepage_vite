import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageLayout.css';

const PageLayout = ({ 
  pageTitle,
  leftSection,
  rightSection, 
  bottomSection,
  buttonPageMap = {},
  pageClassName,
  renderCustomButton
}) => {
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on ${buttonName}`);
    
    // 检查是否有对应的页面路由
    if (buttonPageMap[buttonName]) {
      navigate(buttonPageMap[buttonName]);
    } else {
      // 对于没有对应页面的按钮，显示提示信息
      alert(`You clicked on: ${buttonName}`);
    }
  };

  const renderButtonGroup = (buttons, className) => (
    <div className={`button-group ${className}`}>
      {buttons.map((buttonName, index) => {
        if (renderCustomButton) {
          return renderCustomButton(buttonName, index, handleButtonClick);
        }
        return (
          <button
            key={index}
            className="layout-button"
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className={`page-layout-container ${pageClassName || ''}`}>
      <div className="main-content">
        {/* 左侧子页面 */}
        <div className="left-sidebar">
          <h3 className="sidebar-title">{leftSection.title}</h3>
          {renderButtonGroup(leftSection.buttons, 'left-buttons')}
        </div>
        
        {/* 中央标题区域 */}
        <div className="center-content">
          <h1 className="page-title">{pageTitle}</h1>
        </div>
        
        {/* 右侧子页面 */}
        <div className="right-sidebar">
          <h3 className="sidebar-title">{rightSection.title}</h3>
          {renderButtonGroup(rightSection.buttons, 'right-buttons')}
        </div>
      </div>
      
      {/* 底部子页面 */}
      <div className="bottom-section">
        <h3 className="section-title">{bottomSection.title}</h3>
        {renderButtonGroup(bottomSection.buttons, 'bottom-buttons')}
      </div>
    </div>
  );
};

export default PageLayout;
