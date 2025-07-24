import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SystemEngineering from './components/SystemEngineering';
import Hardware from './components/Hardware';
import HWRequirement from './components/HWRequirement';
import HWArchitecture from './components/HWArchitecture';
import HWDesignTest from './components/HWDesignTest';
import HWIntegrationTest from './components/HWIntegrationTest';
import HWModuleDesign from './components/HWModuleDesign';
import ECUCircuitDesign from './components/ECUCircuitDesign';
import Implementation from './components/Implementation';
import Software from './components/Software';
import ComponentRequirements from './components/ComponentRequirements';
import SWArchitecture from './components/SWArchitecture';
import SWIntegrationTest from './components/SWIntegrationTest';
import SWRequirementTest from './components/SWRequirementTest';
import SWDesign from './components/SWDesign';
import SWImplementation from './components/SWImplementation';
import SWConfiguration from './components/SWConfiguration';
import VehicleIntegration from './components/VehicleIntegration';
import VIRequirements from './components/VIRequirements';
import VIDefinition from './components/VIDefinition';
import VIEvaluation from './components/VIEvaluation';
import VIRelease from './components/VIRelease';
import VICrashTest from './components/VICrashTest';
import Calibration from './components/Calibration';
import CrashData from './components/CrashData';
import CalRequirements from './components/CalRequirements';
import CalRequirementTest from './components/CalRequirementTest';
import CalIntegrationTest from './components/CalIntegrationTest';
import CalRelease from './components/CalRelease';
import CalibrationComponent from './components/CalibrationComponent';
import Algo from './components/Algo';
import Prototype from './components/Prototype';
import AlgoRequirements from './components/AlgoRequirements';
import AlgoArchitecture from './components/AlgoArchitecture';
import AlgoUnitDesign from './components/AlgoUnitDesign';
import AlgoUnitTest from './components/AlgoUnitTest';
import AlgoIntegrationTest from './components/AlgoIntegrationTest';
import AlgoRequirementTest from './components/AlgoRequirementTest';
import AlgoImplementation from './components/AlgoImplementation';
import AlgoIntegration from './components/AlgoIntegration';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/system-engineering" element={<SystemEngineering />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/hw-requirement" element={<HWRequirement />} />
          <Route path="/hw-architecture" element={<HWArchitecture />} />
          <Route path="/hw-design-test" element={<HWDesignTest />} />
          <Route path="/hw-integration-test" element={<HWIntegrationTest />} />
          <Route path="/hw-module-design" element={<HWModuleDesign />} />
          <Route path="/ecu-circuit-design" element={<ECUCircuitDesign />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/software" element={<Software />} />
          <Route path="/component-requirements" element={<ComponentRequirements />} />
          <Route path="/sw-architecture" element={<SWArchitecture />} />
          <Route path="/sw-integration-test" element={<SWIntegrationTest />} />
          <Route path="/sw-requirement-test" element={<SWRequirementTest />} />
          <Route path="/sw-design" element={<SWDesign />} />
          <Route path="/sw-implementation" element={<SWImplementation />} />
          <Route path="/sw-configuration" element={<SWConfiguration />} />
          <Route path="/vehicle-integration" element={<VehicleIntegration />} />
          <Route path="/vi-requirements" element={<VIRequirements />} />
          <Route path="/vi-definition" element={<VIDefinition />} />
          <Route path="/vi-evaluation" element={<VIEvaluation />} />
          <Route path="/vi-release" element={<VIRelease />} />
          <Route path="/vi-crash-test" element={<VICrashTest />} />
          <Route path="/calibration" element={<Calibration />} />
          <Route path="/crash-data" element={<CrashData />} />
          <Route path="/cal-requirements" element={<CalRequirements />} />
          <Route path="/cal-requirement-test" element={<CalRequirementTest />} />
          <Route path="/cal-integration-test" element={<CalIntegrationTest />} />
          <Route path="/cal-release" element={<CalRelease />} />
          <Route path="/calibration-component" element={<CalibrationComponent />} />
          <Route path="/algo" element={<Algo />} />
          <Route path="/prototype" element={<Prototype />} />
          <Route path="/algo-requirements" element={<AlgoRequirements />} />
          <Route path="/algo-architecture" element={<AlgoArchitecture />} />
          <Route path="/algo-unit-design" element={<AlgoUnitDesign />} />
          <Route path="/algo-unit-test" element={<AlgoUnitTest />} />
          <Route path="/algo-integration-test" element={<AlgoIntegrationTest />} />
          <Route path="/algo-requirement-test" element={<AlgoRequirementTest />} />
          <Route path="/algo-implementation" element={<AlgoImplementation />} />
          <Route path="/algo-integration" element={<AlgoIntegration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
