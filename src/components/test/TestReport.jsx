import React, { useEffect } from 'react';
import { testReportTools } from '../../config/test/testReportTools';
import TestBasePage from './TestBasePage';

const TestReport = () => {
  useEffect(() => {
    document.title = "Test Report";
  }, []);

  return (
    <TestBasePage 
      tools={testReportTools} 
      pageTitle="Test Report"
    />
  );
};

export default TestReport;
