import React from 'react';
import PageLayout from './PageLayout';

const Calibration = () => {
  // 页面配置
  const pageConfig = {
    pageTitle: 'Application: Calibration',
    leftSection: {
      title: 'Data & Requirements',
      buttons: [
        'Crash Data',
        'Requirements'
      ]
    },
    rightSection: {
      title: 'Testing & Release',
      buttons: [
        'Cal. Requirement Test',
        'Integration Test',
        'Release'
      ]
    },
    bottomSection: {
      title: 'Implementation',
      buttons: [
        'Calibration'
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

export default Calibration;
