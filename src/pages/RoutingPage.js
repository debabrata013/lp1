import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import Card from '../components/common/Card';
import CodeSnippet from '../components/common/CodeSnippet';
import Badge from '../components/common/Badge';
import {
  Navigation,
  Zap,
  Globe,
  Sparkles,
  ArrowRight,
  User,
  RefreshCw,
  Play,
  BookOpen
} from 'lucide-react';

const RoutingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Interactive state for Dynamic Route parameter simulator
  const [customUserId, setCustomUserId] = useState('101');

  // Interactive state for Programmatic Navigation checkout simulator
  const [isProcessing, setIsProcessing] = useState(false);
  const [simulatedStatus, setSimulatedStatus] = useState('');

  const currentCategory = searchParams.get('category') || 'general';

  const handleSimulatedCheckout = () => {
    setIsProcessing(true);
    setSimulatedStatus('💳 Processing Payment & Order...');
    setTimeout(() => {
      setSimulatedStatus('✅ Success! Redirecting to User #101 Profile...');
      setTimeout(() => {
        setIsProcessing(false);
        setSimulatedStatus('');
        navigate('/routing-demo/user/101');
      }, 1200);
    }, 1000);
  };

  return (
    <div className="page-wrapper fade-in">
      {/* Beginner Friendly Hero Header */}
      <div className="page-header">
        <Badge type="info" label="Beginner's Guide to Client-Side Routing" icon={<BookOpen size={14} />} />
        <h1 className="mt-2">
          <Navigation className="inline-icon text-cyan" /> React Router & Navigation Made Easy
        </h1>
        <p className="page-lead">
          In traditional websites, clicking a link forces the browser to download a whole new HTML file from the server (causing page flashes).
          <strong> React Router</strong> lets your app change screens instantly in memory without reloading!
        </p>
      </div>

      {/* Mental Model Analogy Banner */}
      <div className="analogy-banner">
        <div className="analogy-header">
          <Zap className="text-yellow" size={24} />
          <h3>The Mental Model: Moving Between Rooms</h3>
        </div>
        <div className="analogy-grid">
          <div className="analogy-card analogy-bad">
            <span className="analogy-badge badge-red">❌ Traditional HTML `&lt;a href="..."&gt;`</span>
            <h4>Full Browser Reload</h4>
            <p>Destroys the current page, fetches brand new HTML from server. Resets state, flashes white, slow network roundtrip.</p>
          </div>
          <div className="analogy-card analogy-good">
            <span className="analogy-badge badge-green">⚡ React Router `&lt;Link to="..."&gt;`</span>
            <h4>Instant Memory Swap</h4>
            <p>Keeps JavaScript state intact. Only swaps out the view component. 10x faster, zero page flickering!</p>
          </div>
        </div>
      </div>

      {/* Live Interactive Browser URL Bar Visualizer */}
      <Card title="🌐 Live URL & Route Monitor" badge="Interactive Sandbox" variant="accent">
        <div className="url-visualizer-box">
          <div className="browser-address-bar">
            <Globe size={16} className="text-cyan" />
            <span className="domain-prefix">https://your-react-app.com</span>
            <span className="url-path">{location.pathname}{location.search}</span>
          </div>
          <p className="url-hint">
            💡 Notice how clicking any button on this page updates the URL above <strong>instantly</strong> without refreshing your browser tab!
          </p>
        </div>
      </Card>

      {/* Topic 1: Link & NavLink */}
      <div className="routing-topic-section">
        <Card title="1. Linking Between Pages (`<Link>` & `<NavLink>`)" badge="The Basics" variant="primary">
          <div className="topic-content-grid">
            <div className="topic-explanation">
              <p>
                Use <code>&lt;Link to="/path"&gt;</code> instead of HTML <code>&lt;a href&gt;</code>.
                Use <code>&lt;NavLink&gt;</code> when you want to style the active tab automatically!
              </p>

              <div className="interactive-demo-block">
                <h4>Try Clicking NavLinks (Notice Active Glow):</h4>
                <div className="demo-links-row">
                  <NavLink
                    to="/routing-demo?category=general&sort=newest"
                    className={({ isActive }) => (currentCategory === 'general' ? 'demo-tab active' : 'demo-tab')}
                  >
                    Category: General
                  </NavLink>
                  <NavLink
                    to="/routing-demo?category=tutorials&sort=popular"
                    className={({ isActive }) => (currentCategory === 'tutorials' ? 'demo-tab active' : 'demo-tab')}
                  >
                    Category: Tutorials
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="topic-code">
              <CodeSnippet
                title="React Code Pattern"
                language="jsx"
                code={`import { Link, NavLink } from 'react-router-dom';

// 1. Standard Link (No page refresh!)
<Link to="/about">About Us</Link>

// 2. NavLink (Passes isActive to automatically highlight the current tab)
<NavLink 
  to="/dashboard" 
  className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
>
  Dashboard
</NavLink>`}
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Topic 2: Dynamic Route Parameters */}
      <div className="routing-topic-section">
        <Card title="2. Dynamic Route Parameters (`/user/:id` & `useParams`)" badge="Dynamic Data" variant="primary">
          <div className="topic-content-grid">
            <div className="topic-explanation">
              <p>
                Instead of creating 100 separate page files for 100 users, create <strong>one dynamic route template</strong>: <code>path="/user/:id"</code>.
              </p>

              <div className="interactive-demo-block">
                <h4>Try Opening User Profile Pages:</h4>
                <div className="user-preset-buttons">
                  <Link to="/routing-demo/user/101" className="preset-user-btn">
                    <User size={16} /> <span>Sarah (#101)</span>
                  </Link>
                  <Link to="/routing-demo/user/102" className="preset-user-btn">
                    <User size={16} /> <span>Devon (#102)</span>
                  </Link>
                  <Link to="/routing-demo/user/103" className="preset-user-btn">
                    <User size={16} /> <span>Elena (#103)</span>
                  </Link>
                </div>

                <div className="custom-param-tester">
                  <label>Or test custom User ID:</label>
                  <div className="input-with-btn">
                    <input
                      type="text"
                      className="custom-input"
                      value={customUserId}
                      onChange={(e) => setCustomUserId(e.target.value)}
                      placeholder="e.g. 999"
                    />
                    <Link to={`/routing-demo/user/${customUserId}`} className="btn-hero btn-hero-primary compact">
                      <span>Launch /user/{customUserId}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="topic-code">
              <CodeSnippet
                title="Dynamic Parameter Pattern"
                language="jsx"
                code={`// 1. In App.js (Route Definition with :id placeholder)
<Route path="/user/:id" element={<UserDetailPage />} />

// 2. Inside UserDetailPage.js (Extracting the parameter)
import { useParams } from 'react';

const UserDetailPage = () => {
  const { id } = useParams(); // gets "101", "102", etc.
  return <h1>Viewing Profile for User #{id}</h1>;
};`}
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Topic 3: Programmatic Redirects */}
      <div className="routing-topic-section">
        <Card title="3. Programmatic Redirects (`useNavigate`)" badge="Code-Driven Nav" variant="primary">
          <div className="topic-content-grid">
            <div className="topic-explanation">
              <p>
                Sometimes you want to redirect the user from code (e.g., after logging in, submitting a form, or completing a payment).
                The <code>useNavigate()</code> hook lets you trigger redirects inside functions!
              </p>

              <div className="interactive-demo-block">
                <h4>Simulated Payment & Redirect Action:</h4>
                <button
                  className="btn-hero btn-hero-primary"
                  onClick={handleSimulatedCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? <RefreshCw size={18} className="spin-icon" /> : <Play size={18} />}
                  <span>{isProcessing ? 'Processing...' : 'Simulate Order Checkout'}</span>
                </button>

                {simulatedStatus && (
                  <div className="status-toast-box">
                    <Sparkles size={16} className="text-yellow" />
                    <span>{simulatedStatus}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="topic-code">
              <CodeSnippet
                title="useNavigate Code Pattern"
                language="jsx"
                code={`import { useNavigate } from 'react';

const CheckoutButton = () => {
  const navigate = useNavigate(); // Get navigation function

  const handlePayment = async () => {
    await processPayment();
    // Redirect user to success screen programmatically!
    navigate('/user/101'); 
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};`}
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Topic 4: Search Parameters */}
      <div className="routing-topic-section">
        <Card title="4. URL Search Parameters (`useSearchParams`)" badge="Query Strings" variant="primary">
          <div className="topic-content-grid">
            <div className="topic-explanation">
              <p>
                Query parameters appear after the <code>?</code> in URLs (e.g. <code>?category=tutorials&sort=popular</code>).
                They are ideal for bookmarkable filters, search terms, and page numbers.
              </p>

              <div className="interactive-demo-block">
                <h4>Try Filter Toggle Buttons:</h4>
                <div className="filter-chips-row">
                  <button
                    className={`chip-btn ${currentCategory === 'general' ? 'active' : ''}`}
                    onClick={() => setSearchParams({ category: 'general', sort: 'newest' })}
                  >
                    Set ?category=general
                  </button>
                  <button
                    className={`chip-btn ${currentCategory === 'tutorials' ? 'active' : ''}`}
                    onClick={() => setSearchParams({ category: 'tutorials', sort: 'popular' })}
                  >
                    Set ?category=tutorials
                  </button>
                  <button
                    className={`chip-btn ${currentCategory === 'projects' ? 'active' : ''}`}
                    onClick={() => setSearchParams({ category: 'projects', sort: 'featured' })}
                  >
                    Set ?category=projects
                  </button>
                </div>
              </div>
            </div>

            <div className="topic-code">
              <CodeSnippet
                title="useSearchParams Code Pattern"
                language="jsx"
                code={`import { useSearchParams } from 'react';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read parameter ?category=...
  const currentCategory = searchParams.get('category'); 

  return (
    <button onClick={() => setSearchParams({ category: 'tutorials' })}>
      Show Tutorials
    </button>
  );
};`}
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Beginner Cheatsheet Summary */}
      <Card title="💡 React Router Quick Cheatsheet" badge="Summary Table" variant="accent">
        <div className="cheatsheet-table-wrapper">
          <table className="cheatsheet-table">
            <thead>
              <tr>
                <th>What you want to do</th>
                <th>React Router Feature</th>
                <th>Example Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Link to another page</strong></td>
                <td><code>&lt;Link to="..."&gt;</code></td>
                <td><code>&lt;Link to="/about"&gt;About&lt;/Link&gt;</code></td>
              </tr>
              <tr>
                <td><strong>Highlight active tab link</strong></td>
                <td><code>&lt;NavLink to="..."&gt;</code></td>
                <td><code>&lt;NavLink className=&#123;(&#123;isActive&#125;) =&gt; ...&#125;&gt;</code></td>
              </tr>
              <tr>
                <td><strong>Read dynamic ID from URL</strong></td>
                <td><code>useParams()</code></td>
                <td><code>const &#123; id &#125; = useParams();</code></td>
              </tr>
              <tr>
                <td><strong>Redirect after form submit</strong></td>
                <td><code>useNavigate()</code></td>
                <td><code>const navigate = useNavigate(); navigate('/home');</code></td>
              </tr>
              <tr>
                <td><strong>Read/Update query strings</strong></td>
                <td><code>useSearchParams()</code></td>
                <td><code>const [params, setParams] = useSearchParams();</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default RoutingPage;
