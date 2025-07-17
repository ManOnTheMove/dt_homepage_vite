import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SystemEngineering from './components/SystemEngineering';
import Hardware from './components/Hardware';
import Software from './components/Software';
import VehicleIntegration from './components/VehicleIntegration';
import Calibration from './components/Calibration';
import Algo from './components/Algo';
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
          <Route path="/software" element={<Software />} />
          <Route path="/vehicle-integration" element={<VehicleIntegration />} />
          <Route path="/calibration" element={<Calibration />} />
          <Route path="/algo" element={<Algo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
