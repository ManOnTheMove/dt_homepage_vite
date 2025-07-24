import React from 'react';
import PageLayout from './PageLayout';

const Algo = () => {
  // 页面配置
  const pageConfig = {
    pageTitle: 'Algo',
    leftSection: {
      title: 'Requirements & Design',
      buttons: [
        'Prototype',
        'Algo Requirements',
        'Algo Architecture',
        'Algo Unit Design'
      ]
    },
    rightSection: {
      title: 'Testing & Validation',
      buttons: [
        'Algo Unit Test',
        'Algo Integration test',
        'Algo Requirement Test'
      ]
    },
    bottomSection: {
      title: 'Implementation & Integration',
      buttons: [
        'Implementation',
        'Algo Integration'
      ]
    }
  };

  return (
    <PageLayout
      pageTitle={pageConfig.pageTitle}
      leftSection={pageConfig.leftSection}
      rightSection={pageConfig.rightSection}
      bottomSection={pageConfig.bottomSection}
      buttonPageMap={{
        'Prototype': '/prototype',
        'Algo Requirements': '/algo-requirements',
        'Algo Architecture': '/algo-architecture',
        'Algo Unit Design': '/algo-unit-design',
        'Algo Unit Test': '/algo-unit-test',
        'Algo Integration test': '/algo-integration-test',
        'Algo Requirement Test': '/algo-requirement-test',
        'Implementation': '/algo-implementation',
        'Algo Integration': '/algo-integration'
      }}
      pageClassName="secondary-page"
    />
  );
};

export default Algo;
