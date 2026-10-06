import React from 'react';

/**
 * Card Component
 * Demonstrates:
 * 1. Props destructuring (`title`, `badge`, `variant`, `children`, `footer`)
 * 2. `children` prop - receiving nested JSX content passed between <Card>...</Card>
 * 3. Conditional rendering of badge and footer
 */
const Card = ({ title, badge, variant = 'default', children, footer, className = '' }) => {
  return (
    <div className={`custom-card card-variant-${variant} ${className}`}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {badge && <span className="card-badge">{badge}</span>}
        </div>
      )}
      
      <div className="card-body">
        {children}
      </div>

      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
