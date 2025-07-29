import React from 'react';
import PageLayout from './PageLayout';

const SystemEngineering = () => {
  // 定义按钮到页面的映射关系
  const buttonPageMap = {
    'Hardware': '/hardware',
    'Software': '/software',
    'Application: Vehicle Integration': '/vehicle-integration',
    'Application: Calibration': '/calibration',
    'Algo': '/algo',
    'System Test': '/system-test-sw-testing',
    'System Integration Test': '/system-test-sw-testing',
  };

  // 页面配置
  const pageConfig = {
    pageTitle: 'System Engineering',
    leftSection: {
      title: 'Requirements & Design',
      buttons: [
        'System Requirements',
        'System Architecture and Design',
        'Hardware'
      ]
    },
    rightSection: {
      title: 'Testing & Release',
      buttons: [
        'System Integration Test',
        'System Test', 
        'Release of Product Samples',
        'Plant Interface'
      ]
    },
    bottomSection: {
      title: 'Applications & Implementation',
      buttons: [
        'Software',
        'Application: Vehicle Integration', 
        'Application: Calibration',
        'Algo'
      ]
    }
  };

  return (
    <PageLayout
      pageTitle={pageConfig.pageTitle}
      leftSection={pageConfig.leftSection}
      rightSection={pageConfig.rightSection}
      bottomSection={pageConfig.bottomSection}
      buttonPageMap={buttonPageMap}
      pageClassName="system-engineering-page"
    />
  );
};

export default SystemEngineering;
