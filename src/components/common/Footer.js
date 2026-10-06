import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-title">
            <Code2 size={18} className="inline-icon" /> React Project Architecture & Core Concepts
          </p>
          <p className="footer-desc">
            Built with React 19 & React Router. Demonstrating standard directory structure, props, navigation, and state.
          </p>
        </div>
        <div className="footer-badge">
          <Sparkles size={16} /> <span>Interactive Learning Environment</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
