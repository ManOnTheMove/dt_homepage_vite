import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homePageImage from '../DT_HomePage.png';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="home-container">
      <h1 className="home-title">OSS-CN DT/AI Homepage </h1>
      <p className="home-description">
        Welcome to the DT Project Management System. Navigate through different modules to explore the engineering workflows.
      </p>
      <Link to="/system-engineering">
        <img src={homePageImage} alt="Home Page" className="home-image" />
      </Link>
    </div>
    </div>
  );
};

export default Home;
