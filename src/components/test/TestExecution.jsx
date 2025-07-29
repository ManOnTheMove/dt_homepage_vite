import React, { useEffect } from 'react';
import { testExecutionTools } from '../../config/test/testExecutionTools';
import TestBasePage from './TestBasePage';

const TestExecution = () => {
  useEffect(() => {
    document.title = "Test Execution";
  }, []);

  return (
    <TestBasePage 
      tools={testExecutionTools} 
      pageTitle="Test Execution"
    />
  );
};

export default TestExecution;
