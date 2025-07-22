import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SystemEngineering.css';

const SystemEngineering = () => {
  const navigate = useNavigate();
  
  // 左侧子页面按钮 - 需求与设计
  const leftSidebarButtons = [
    'System Requirements',
    'System Architecture and Design',
    'Hardware'
  ];
  
  // 右侧子页面按钮 - 测试与发布
  const rightSidebarButtons = [
    'System Integration Test',
    'System Test', 
    'Release of Product Samples',
    'Plant Interface'
  ];
  
  // 底部子页面按钮 - 应用与实现
  const bottomSectionButtons = [
    'Software',
    'Application: Vehicle Integration', 
    'Application: Calibration',
    'Algo'
  ];

  // 定义按钮到页面的映射关系
  const buttonPageMap = {
    'Hardware': '/hardware',
    'Software': '/software',
    'Application: Vehicle Integration': '/vehicle-integration',
    'Application: Calibration': '/calibration',
    'Algo': '/algo'
  };

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
      {buttons.map((buttonName, index) => (
        <button
          key={index}
          className="se-button"
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );

  return (
    <div className="system-engineering-container">
      <div className="main-content">
        {/* 左侧子页面 */}
        <div className="left-sidebar">
          <h3 className="sidebar-title">Requirements & Design</h3>
          {renderButtonGroup(leftSidebarButtons, 'left-buttons')}
        </div>
        
        {/* 中央标题区域 */}
        <div className="center-content">
          <h1 className="page-title">System Engineering</h1>
        </div>
        
        {/* 右侧子页面 */}
        <div className="right-sidebar">
          <h3 className="sidebar-title">Testing & Release</h3>
          {renderButtonGroup(rightSidebarButtons, 'right-buttons')}
        </div>
      </div>
      
      {/* 底部子页面 */}
      <div className="bottom-section">
        <h3 className="section-title">Applications & Implementation</h3>
        {renderButtonGroup(bottomSectionButtons, 'bottom-buttons')}
      </div>
    </div>
  );
};

export default SystemEngineering;
