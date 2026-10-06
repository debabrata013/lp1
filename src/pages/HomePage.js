import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { FolderTree, Component, Navigation, Sparkles, ArrowRight, Code, Zap, ShieldCheck } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="page-wrapper fade-in">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <Badge type="accent" label="React Core Architecture Guide" icon={<Sparkles size={14} />} />
          <h1 className="hero-title">
            Mastering React Folder Structure, <span className="gradient-text">Props, & Routing</span>
          </h1>
          <p className="hero-subtitle">
            An interactive, hands-on demonstration application built to illustrate clean project organization, component composition, prop flow, and single-page routing in React.
          </p>

          <div className="hero-actions">
            <Link to="/folder-structure" className="btn-hero btn-hero-primary">
              <span>Explore Folder Structure</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/props-demo" className="btn-hero btn-hero-secondary">
              <span>Interactive Props Visualizer</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <div className="features-grid">
        <Link to="/folder-structure" className="feature-card-link">
          <Card title="Directory Architecture" badge="src/ Structure" variant="primary">
            <div className="feature-card-inner">
              <div className="feature-icon-box bg-purple">
                <FolderTree size={28} />
              </div>
              <p>
                Learn standard React conventions for organizing <code>components/</code>, <code>pages/</code>, <code>utils/</code>, <code>hooks/</code>, and <code>context/</code>.
              </p>
              <div className="card-link-footer">
                <span>View Architecture Tree</span> <ArrowRight size={16} />
              </div>
            </div>
          </Card>
        </Link>

        <Link to="/props-demo" className="feature-card-link">
          <Card title="Props & State Flow" badge="Live Playground" variant="accent">
            <div className="feature-card-inner">
              <div className="feature-icon-box bg-cyan">
                <Component size={28} />
              </div>
              <p>
                Understand primitive props, function callbacks, default values, and the power of the <code>children</code> prop with live interactive controls.
              </p>
              <div className="card-link-footer">
                <span>Launch Props Playground</span> <ArrowRight size={16} />
              </div>
            </div>
          </Card>
        </Link>

        <Link to="/routing-demo" className="feature-card-link">
          <Card title="Routing & Navigation" badge="React Router v6/v7" variant="primary">
            <div className="feature-card-inner">
              <div className="feature-icon-box bg-emerald">
                <Navigation size={28} />
              </div>
              <p>
                Master client-side routing with <code>&lt;Routes&gt;</code>, <code>&lt;NavLink&gt;</code>, dynamic route parameters (<code>/user/:id</code>), and <code>useNavigate</code>.
              </p>
              <div className="card-link-footer">
                <span>Try Navigation Demo</span> <ArrowRight size={16} />
              </div>
            </div>
          </Card>
        </Link>
      </div>

      {/* Core Principles */}
      <section className="principles-section">
        <h2>
          <Zap className="inline-icon text-yellow" /> Why This Folder Structure Matters
        </h2>
        <div className="principles-grid">
          <div className="principle-card">
            <ShieldCheck size={24} className="text-cyan" />
            <h4>Scalability</h4>
            <p>Prevents file clutter as your codebase grows from 5 to 500 components.</p>
          </div>

          <div className="principle-card">
            <Code size={24} className="text-purple" />
            <h4>Reusability</h4>
            <p>Separates pure UI presentation components from page-level router views.</p>
          </div>

          <div className="principle-card">
            <Sparkles size={24} className="text-emerald" />
            <h4>Maintainability</h4>
            <p>Isolates utility math, date formatters, and API handlers into <code>utils/</code> and <code>services/</code>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
