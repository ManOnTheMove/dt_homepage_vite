import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="home-container">
      <h1 className="home-title">OSS-CN DT/AI Homepage </h1>
      <p className="home-description">
        Welcome to the DT Project Management System. Navigate through different modules to explore the engineering workflows.
      </p>
      <div className="home-grid">
        <Link to="/system-engineering" className="home-card">
          <h3>System Engineering</h3>
          <p>Overall system design and requirements management</p>
        </Link>
        <Link to="/hardware" className="home-card">
          <h3>Hardware</h3>
          <p>Hardware requirements, design, and testing</p>
        </Link>
        <Link to="/software" className="home-card">
          <h3>Software</h3>
          <p>Software architecture, development, and testing</p>
        </Link>
        <Link to="/vehicle-integration" className="home-card">
          <h3>Vehicle Integration</h3>
          <p>Vehicle integration and crash testing</p>
        </Link>
        <Link to="/calibration" className="home-card">
          <h3>Calibration</h3>
          <p>System calibration and testing processes</p>
        </Link>
        <Link to="/algo" className="home-card">
          <h3>Algorithm</h3>
          <p>Algorithm development and integration</p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Home;
