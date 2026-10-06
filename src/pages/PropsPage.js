import React from 'react';
import PropsPlayground from '../components/props-demo/PropsPlayground';
import Card from '../components/common/Card';
import CodeSnippet from '../components/common/CodeSnippet';
import Badge from '../components/common/Badge';
import { Component, Zap, Layers, RefreshCw, ArrowRightLeft, BookOpen } from 'lucide-react';

const PropsPage = () => {
  return (
    <div className="page-wrapper fade-in">
      {/* Header Banner */}
      <div className="page-header">
        <Badge type="info" label="React Component Architecture" icon={<BookOpen size={14} />} />
        <h1 className="mt-2">
          <Component className="inline-icon text-purple" /> React Props & Component Communication
        </h1>
        <p className="page-lead">
          Props (short for <strong>Properties</strong>) are how components talk to each other. They allow parent components to pass data, functions, and layout elements down to child components.
        </p>
      </div>

      {/* Mental Model Analogy Box */}
      <div className="analogy-banner">
        <div className="analogy-header">
          <Zap className="text-yellow" size={24} />
          <h3>The Mental Model: JavaScript Function Arguments</h3>
        </div>
        <p className="analogy-desc">
          Think of a React Component as a regular JavaScript function. <strong>Props are the function arguments!</strong>
        </p>
        <div className="analogy-code-comparison">
          <div className="comparison-box">
            <span className="comparison-tag">Plain JS Function</span>
            <pre><code>{`function greet(name, role) {
  return "Hello " + name + " (" + role + ")";
}`}</code></pre>
          </div>
          <div className="comparison-box">
            <span className="comparison-tag tag-react">React Component</span>
            <pre><code>{`function UserCard({ name, role }) {
  return <div>{name} - {role}</div>;
}`}</code></pre>
          </div>
        </div>
      </div>

      {/* Interactive Live Playground Visualizer */}
      <PropsPlayground />

      {/* 3 Core Rules of Props */}
      <Card title="📜 The 3 Golden Rules of React Props" badge="Core Principles" variant="primary">
        <div className="principles-row">
          <div className="rule-card">
            <div className="rule-icon-box bg-purple">
              <Layers size={22} />
            </div>
            <h4>1. Top-Down Flow</h4>
            <p>Data flows strictly downwards from Parent to Child. A child cannot directly edit its parent's state.</p>
          </div>

          <div className="rule-card">
            <div className="rule-icon-box bg-cyan">
              <ArrowRightLeft size={22} />
            </div>
            <h4>2. Read-Only (Immutable)</h4>
            <p>Props received by a child component are strictly read-only. Never modify <code>props.name = 'new'</code>!</p>
          </div>

          <div className="rule-card">
            <div className="rule-icon-box bg-emerald">
              <RefreshCw size={22} />
            </div>
            <h4>3. Dynamic Re-rendering</h4>
            <p>Whenever parent state updates a prop, React automatically re-renders the child component instantly.</p>
          </div>
        </div>
      </Card>

      {/* Deep-Dive Concept Cards */}
      <div className="concepts-grid mt-4">
        <Card title="1. Passing Callback Functions as Props" badge="Child to Parent" variant="default">
          <p>
            How does a child tell a parent something happened (e.g. user clicked a button)?
            The parent passes a <strong>function as a prop</strong>, and the child calls that function!
          </p>
          <CodeSnippet
            code={`// Parent Component
const Parent = () => {
  const [status, setStatus] = useState("Offline");

  return (
    // Pass event handler function as a prop
    <Child onToggle={() => setStatus("Online")} />
  );
};

// Child Component
const Child = ({ onToggle }) => (
  <button onClick={onToggle}>Turn Online</button>
);`}
            language="jsx"
            title="Callback Prop Pattern"
          />
        </Card>

        <Card title="2. The Special `children` Prop" badge="Layout Composition" variant="default">
          <p>
            The <code>children</code> prop allows components to act as layout wrappers, embedding any JSX element passed between opening and closing tags.
          </p>
          <CodeSnippet
            code={`// Card Wrapper Component
const Card = ({ title, children }) => (
  <div className="card-box">
    <h3>{title}</h3>
    <div className="card-content">{children}</div>
  </div>
);

// Usage:
<Card title="Welcome">
  {/* This badge is passed into the 'children' prop */}
  <span className="badge">⭐ VIP User</span>
</Card>`}
            language="jsx"
            title="children Prop Pattern"
          />
        </Card>
      </div>
    </div>
  );
};

export default PropsPage;
