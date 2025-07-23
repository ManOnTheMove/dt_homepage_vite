import React from 'react';
import PageLayout from './PageLayout';

const Software = () => {
  // 页面配置
  const pageConfig = {
    pageTitle: 'Software',
    leftSection: {
      title: 'Requirements & Architecture',
      buttons: [
        'Component Requirements',
        'SW Architecture'
      ]
    },
    rightSection: {
      title: 'Testing & Validation',
      buttons: [
        'SW Integration and Test',
        'SW Requirement Test'
      ]
    },
    bottomSection: {
      title: 'Design & Implementation',
      buttons: [
        'SW Design',
        'Implementation',
        'Configuration'
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

export default Software;
