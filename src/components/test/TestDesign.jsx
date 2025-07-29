import React, { useEffect } from 'react';
import { testDesignTools } from '../../config/test/testDesignTools';
import TestBasePage from './TestBasePage';

const TestDesign = () => {
  useEffect(() => {
    document.title = "Test Design";
  }, []);

  return (
    <TestBasePage 
      tools={testDesignTools} 
      pageTitle="Test Design"
    />
  );
};

export default TestDesign;
