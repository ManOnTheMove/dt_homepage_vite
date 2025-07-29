import React, { useEffect } from 'react';
import { testSetupTools } from '../../config/test/testSetupTools';
import TestBasePage from './TestBasePage';

const TestSetup = () => {
  useEffect(() => {
    document.title = "Test Setup";
  }, []);

  return (
    <TestBasePage 
      tools={testSetupTools} 
      pageTitle="Test Setup"
    />
  );
};

export default TestSetup;
