import React from 'react';

const Badge = ({ type = 'info', label, icon }) => {
  return (
    <span className={`badge-pill badge-${type}`}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span>{label}</span>
    </span>
  );
};

export default Badge;
