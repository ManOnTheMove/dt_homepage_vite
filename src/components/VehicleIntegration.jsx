import React from 'react';
import PageLayout from './PageLayout';

const VehicleIntegration = () => {
  // 页面配置
  const pageConfig = {
    pageTitle: 'Application: Vehicle Integration',
    leftSection: {
      title: 'Planning & Requirements',
      buttons: [
        'Requirements',
        'Definition'
      ]
    },
    rightSection: {
      title: 'Validation & Release',
      buttons: [
        'Evaluation',
        'Release'
      ]
    },
    bottomSection: {
      title: 'Testing & Verification',
      buttons: [
        'Crash Test'
      ]
    }
  };

  return (
    <PageLayout
      pageTitle={pageConfig.pageTitle}
      leftSection={pageConfig.leftSection}
      rightSection={pageConfig.rightSection}
      bottomSection={pageConfig.bottomSection}
      buttonPageMap={{}}
    />
  );
};

export default VehicleIntegration;
