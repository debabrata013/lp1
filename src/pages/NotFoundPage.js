import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="page-wrapper fade-in text-center">
      <div className="not-found-container">
        <AlertCircle size={64} className="text-pink mb-4" />
        <h1>404 - Page Not Found</h1>
        <p className="page-lead">The route you requested does not exist in this application.</p>
        
        <div className="mt-6">
          <Link to="/" className="btn-hero btn-hero-primary inline-flex">
            <Home size={18} />
            <span>Return to Home Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
