import React from 'react';
import { swDesignTools } from '../config/swDesignTools';
import './HWRequirement.css';

const SWDesign = () => {
  // 从URL中提取域名
  const extractDomain = (url) => {
    try {
      const domain = new URL(url).hostname;
      return domain;
    } catch (error) {
      console.error("Invalid URL:", url);
      return "";
    }
  };

  // 获取网站favicon的URL
  const getFaviconUrl = (url) => {
    const domain = extractDomain(url);
    // 使用Google的favicon服务获取favicon
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  };
  
  const handleEnterClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="hw-requirement-container">
      <h1 className="page-title">SW Design</h1>
      <div className="hero-cards-container">
        {swDesignTools.map((tool) => (
          <div key={tool.id} className="hero-card">
            <div className="logo-container">
              <img 
                src={getFaviconUrl(tool.link)} 
                alt={`${tool.toolName} logo`} 
                className="tool-logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="card-content">
              <h2 className="tool-name">{tool.toolName}</h2>
              {tool.responsible && (
                <p className="responsible">{tool.responsible}</p>
              )}
              <p className="description">{tool.description}</p>
              <button 
                className="enter-button"
                onClick={() => handleEnterClick(tool.link)}
              >
                Enter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SWDesign;
