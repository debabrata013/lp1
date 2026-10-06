import React, { useState } from 'react';
import UserProfileCard from './UserProfileCard';
import CodeSnippet from '../common/CodeSnippet';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { Sliders, CheckSquare, Zap } from 'lucide-react';

const PropsPlayground = () => {
  // Parent state controlling props passed to child component
  const [userName, setUserName] = useState('Alex Rivera');
  const [userRole, setUserRole] = useState('Senior Frontend Architect');
  const [userEmail, setUserEmail] = useState('alex.rivera@tech.dev');
  const [isOnline, setIsOnline] = useState(true);
  const [credits, setCredits] = useState(2450);
  const [badgeText, setBadgeText] = useState('Pro Member ⭐');

  // Dynamic code snippet representation
  const generatedCode = `<UserProfileCard
  name="${userName}"
  role="${userRole}"
  email="${userEmail}"
  isOnline={${isOnline}}
  credits={${credits}}
  onStatusToggle={() => setIsOnline(!isOnline)}
>
  <span className="custom-badge-pill">${badgeText}</span>
</UserProfileCard>`;

  return (
    <div className="props-playground-section">
      <div className="section-title-box">
        <Badge type="info" label="Interactive Learning Tool" icon={<Zap size={14} />} />
        <h2 className="mt-2">
          <Sliders className="inline-icon text-cyan" /> Live Props Controls & Visualizer
        </h2>
        <p className="section-desc">
          Props are passed down from a <strong>Parent component</strong> into a <strong>Child component</strong>.
          Modify the parent state controls below to watch how props instantly update the child component and generated JSX in real-time!
        </p>
      </div>

      <div className="playground-grid">
        {/* Left Column: Parent Component Controls */}
        <Card title="🎛️ Parent State Controls (Props Source)" badge="Parent Component" variant="primary">
          <div className="controls-form">
            <div className="form-group">
              <label>
                <span>Name Prop</span>
                <code className="prop-name-badge">name="{userName}"</code>
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="custom-input"
                placeholder="Enter user name..."
              />
            </div>

            <div className="form-group">
              <label>
                <span>Role Prop</span>
                <code className="prop-name-badge">role="{userRole}"</code>
              </label>
              <input
                type="text"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="custom-input"
                placeholder="Enter role title..."
              />
            </div>

            <div className="form-group">
              <label>
                <span>Email Prop</span>
                <code className="prop-name-badge">email="{userEmail}"</code>
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="custom-input"
                placeholder="Enter user email..."
              />
            </div>

            <div className="form-group">
              <label>
                <span>Credits Prop (Number)</span>
                <code className="prop-name-badge">credits={credits}</code>
              </label>
              <input
                type="number"
                value={credits}
                onChange={(e) => setCredits(Number(e.target.value))}
                className="custom-input"
                step="50"
              />
            </div>

            <div className="form-group">
              <label>
                <span>Children Prop Content</span>
                <code className="prop-name-badge">children</code>
              </label>
              <input
                type="text"
                value={badgeText}
                onChange={(e) => setBadgeText(e.target.value)}
                className="custom-input"
                placeholder="Badge text passed inside <Card>..."
              />
            </div>

            <div className="form-group checkbox-form-group">
              <label className="checkbox-toggle-label">
                <input
                  type="checkbox"
                  checked={isOnline}
                  onChange={(e) => setIsOnline(e.target.checked)}
                  className="checkbox-input"
                />
                <span className="checkbox-custom-box">
                  <CheckSquare size={16} className={isOnline ? 'text-emerald' : 'text-gray'} />
                </span>
                <span>Is Online Prop (<code className="prop-name-badge">isOnline={isOnline.toString()}</code>)</span>
              </label>
            </div>
          </div>
        </Card>

        {/* Right Column: Live Rendered Child Preview & Generated JSX */}
        <div className="output-column">
          <Card title="👁️ Live Rendered Child (`<UserProfileCard />`)" badge="Child Component" variant="accent">
            <UserProfileCard
              name={userName}
              role={userRole}
              email={userEmail}
              isOnline={isOnline}
              credits={credits}
              onStatusToggle={() => setIsOnline(!isOnline)}
            >
              <span className="custom-badge-pill">{badgeText}</span>
            </UserProfileCard>
          </Card>

          <CodeSnippet
            title="Generated JSX Received by Child Component"
            code={generatedCode}
            language="jsx"
          />
        </div>
      </div>
    </div>
  );
};

export default PropsPlayground;
