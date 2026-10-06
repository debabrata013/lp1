import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Card from '../components/common/Card';
import CodeSnippet from '../components/common/CodeSnippet';
import { User, ArrowLeft, ShieldCheck, Mail, Navigation } from 'lucide-react';

// Mock user database
const mockUsers = {
  101: { name: 'Sarah Connor', role: 'Security Lead', email: 'sarah@cyber.io', avatarColor: '#38bdf8' },
  102: { name: 'Devon Knight', role: 'Fullstack Dev', email: 'devon@code.net', avatarColor: '#a855f7' },
  103: { name: 'Elena Rostova', role: 'UX Designer', email: 'elena@design.org', avatarColor: '#10b981' },
};

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = mockUsers[id] || {
    name: `User #${id}`,
    role: 'Dynamic Route User',
    email: `user${id}@example.com`,
    avatarColor: '#f59e0b',
  };

  return (
    <div className="page-wrapper fade-in">
      <button className="back-btn" onClick={() => navigate('/routing-demo')}>
        <ArrowLeft size={16} /> Back to Routing Demo
      </button>

      <div className="page-header">
        <h1>
          <Navigation className="inline-icon text-cyan" /> Dynamic Route Target: `/user/:id`
        </h1>
        <p className="page-lead">
          You are currently viewing a dynamic route parameterized by React Router!
        </p>
      </div>

      <div className="user-detail-layout">
        <Card title={`User Profile Details (ID: ${id})`} badge="useParams() Hook" variant="accent">
          <div className="user-detail-card">
            <div className="user-avatar-large" style={{ backgroundColor: user.avatarColor }}>
              <User size={48} color="#fff" />
            </div>
            <h2>{user.name}</h2>
            <span className="badge-role">{user.role}</span>

            <div className="user-meta-list">
              <div className="meta-item">
                <Mail size={16} /> <span>Email: {user.email}</span>
              </div>
              <div className="meta-item">
                <ShieldCheck size={16} className="text-emerald" /> <span>Param Captured: `useParams().id = "{id}"`</span>
              </div>
            </div>

            <div className="user-actions">
              <Link to="/routing-demo/user/101" className="btn-secondary">Switch to User 101</Link>
              <Link to="/routing-demo/user/102" className="btn-secondary">Switch to User 102</Link>
              <Link to="/routing-demo/user/103" className="btn-secondary">Switch to User 103</Link>
            </div>
          </div>
        </Card>

        <Card title="How `useParams()` Works" badge="Code Concept" variant="primary">
          <p>
            The <code>useParams()</code> hook reads dynamic segment parameters from the URL matching path <code>/routing-demo/user/:id</code>.
          </p>
          <CodeSnippet
            code={`import { useParams } from 'react';

const UserDetailPage = () => {
  // Extracts 'id' from URL path segment /user/:id
  const { id } = useParams();

  return <div>Viewing user profile ID: {id}</div>;
};`}
            language="jsx"
            title="Reading Route Parameters"
          />
        </Card>
      </div>
    </div>
  );
};

export default UserDetailPage;
