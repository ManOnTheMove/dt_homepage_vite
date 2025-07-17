import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SystemEngineering.css';

const SystemEngineering = () => {
  const navigate = useNavigate();
  
  const buttons = [
    'System Requirements',                    // position-0: Top left
    'System Architecture and Design',        // position-1: Second layer left
    'Hardware',                             // position-2: Third layer left
    'Application: Vehicle Integration',      // position-3: Fourth layer left
    'Software',                             // position-4: Between Applications (center upper)
    'Application: Calibration',             // position-5: Fourth layer right
    'Algo',                                // position-6: Right upper of Application: Calibration
    'System Integration Test',             // position-7: Right upper of Algo
    'System Test',                         // position-8: Right upper of System Integration Test
    'Release of Product Samples',          // position-9: Right upper of System Test
    'Plant Interface'                      // position-10: Right upper of Release of Product Samples
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

  return (
    <div className="system-engineering-container">
      <h1 className="page-title">System Engineering</h1>
      <div className="v-shape-container">
        {buttons.map((buttonName, index) => (
          <button
            key={index}
            className={`v-button position-${index}`}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SystemEngineering;
