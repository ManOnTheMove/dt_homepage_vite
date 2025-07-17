import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <h2 className="nav-title">DT Project Navigation</h2>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/system-engineering" className="nav-link">System Engineering</Link></li>
          <li><Link to="/hardware" className="nav-link">Hardware</Link></li>
          <li><Link to="/software" className="nav-link">Software</Link></li>
          <li><Link to="/vehicle-integration" className="nav-link">Vehicle Integration</Link></li>
          <li><Link to="/calibration" className="nav-link">Calibration</Link></li>
          <li><Link to="/algo" className="nav-link">Algo</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
