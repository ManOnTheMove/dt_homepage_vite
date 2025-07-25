import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Close navigation when route changes
  useEffect(() => {
    setIsExpanded(false);
  }, [location]);

  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  // If it's the home page, show full navigation always
  if (isHomePage) {
    return (
      <nav className="navigation">
        <div className="nav-container">
          <h2 className="nav-title">DT Project Navigation</h2>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">DT HomePage</Link></li>
            <li><Link to="/home" className="nav-link">Project Home</Link></li>
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
  }

  // For other pages, show collapsible navigation
  return (
    <>
      <nav className={`navigation ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="nav-container">
          <button 
            className="nav-toggle-btn" 
            onClick={toggleNavigation}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="nav-toggle-text">Menu</span>
          </button>
          
          {isExpanded && (
            <div className="nav-content">
              <h2 className="nav-title">DT Project Navigation</h2>
              <ul className="nav-links">
                <li><Link to="/" className="nav-link">DT HomePage</Link></li>
                <li><Link to="/home" className="nav-link">Project Home</Link></li>
                <li><Link to="/system-engineering" className="nav-link">System Engineering</Link></li>
                <li><Link to="/hardware" className="nav-link">Hardware</Link></li>
                <li><Link to="/software" className="nav-link">Software</Link></li>
                <li><Link to="/vehicle-integration" className="nav-link">Vehicle Integration</Link></li>
                <li><Link to="/calibration" className="nav-link">Calibration</Link></li>
                <li><Link to="/algo" className="nav-link">Algo</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      
      {/* Overlay to close navigation when clicking outside */}
      {isExpanded && (
        <div className="nav-overlay" onClick={() => setIsExpanded(false)}></div>
      )}
    </>
  );
};

export default Navigation;
