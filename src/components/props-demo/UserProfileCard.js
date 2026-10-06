import React from 'react';
import { User, Mail, Shield, CheckCircle2, XCircle, Calendar, DollarSign } from 'lucide-react';
import { formatCurrency, formatDate } from '../../utils/formatters';

/**
 * UserProfileCard Component
 * --------------------------
 * Demonstrates:
 * 1. Props Destructuring: Receiving { name, role, email, isOnline, joinDate, credits, onStatusToggle, children }
 * 2. Default Values: Setting default props like role = 'Developer'
 * 3. Event Callback Prop: Calling `onStatusToggle()` when user clicks button
 * 4. Using Utility Functions: formatCurrency(credits), formatDate(joinDate)
 * 5. React Children Prop: Rendering custom badge or action elements passed inside component
 */
const UserProfileCard = ({
  name = 'Anonymous User',
  role = 'Developer',
  email = 'user@example.com',
  isOnline = false,
  joinDate = '2024-01-15',
  credits = 1500,
  onStatusToggle,
  children,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div className="avatar-wrapper">
          <div className="avatar-placeholder">
            <User size={30} />
          </div>
          <span className={`status-indicator ${isOnline ? 'online' : 'offline'}`} />
        </div>
        <div className="profile-main-info">
          <h4 className="user-name">{name}</h4>
          <span className="user-role">{role}</span>
        </div>
        {children && <div className="profile-extra-badge">{children}</div>}
      </div>

      <div className="profile-details-grid">
        <div className="detail-item">
          <div className="detail-label-row">
            <Mail size={13} className="text-cyan" />
            <span className="detail-label">Email</span>
          </div>
          <span className="detail-value text-truncate">{email}</span>
        </div>

        <div className="detail-item">
          <div className="detail-label-row">
            <Shield size={13} className="text-purple" />
            <span className="detail-label">Status</span>
          </div>
          <span className={`detail-value ${isOnline ? 'text-emerald' : 'text-gray'}`}>
            {isOnline ? (
              <>
                <CheckCircle2 size={14} className="inline-icon text-emerald" /> Active Now
              </>
            ) : (
              <>
                <XCircle size={14} className="inline-icon text-muted" /> Offline
              </>
            )}
          </span>
        </div>

        <div className="detail-item">
          <div className="detail-label-row">
            <Calendar size={13} className="text-indigo" />
            <span className="detail-label">Joined</span>
          </div>
          <span className="detail-value">{formatDate(joinDate)}</span>
        </div>

        <div className="detail-item">
          <div className="detail-label-row">
            <DollarSign size={13} className="text-yellow" />
            <span className="detail-label">Credits</span>
          </div>
          <span className="detail-value highlight">{formatCurrency(credits)}</span>
        </div>
      </div>

      {onStatusToggle && (
        <div className="profile-card-actions">
          <button
            className={`status-toggle-btn ${isOnline ? 'btn-danger' : 'btn-success'}`}
            onClick={onStatusToggle}
          >
            Trigger Callback Prop (`onStatusToggle`)
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
