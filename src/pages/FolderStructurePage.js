import React, { useState } from 'react';
import Card from '../components/common/Card';
import CodeSnippet from '../components/common/CodeSnippet';
import Badge from '../components/common/Badge';
import {
  Folder,
  FileText,
  ChevronRight,
  FolderPlus,
  Info,
  CheckCircle2,
  Zap,
  BookOpen,
  HelpCircle,
  Sparkles
} from 'lucide-react';

const FolderStructurePage = () => {
  const [activeFolder, setActiveFolder] = useState('components');
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const folderDetails = {
    components: {
      title: 'src/components/',
      badge: 'UI Presentation Layer',
      purpose: 'Houses modular, reusable UI components like buttons, modals, cards, navbars, and form inputs.',
      bestPractices: [
        'Organize into subfolders like common/ or ui/ for small atomic elements.',
        'Keep component files focused on a single UI presentation responsibility.',
        'Avoid putting page-level router views or heavy data fetching inside components/.',
      ],
      exampleCode: `// src/components/common/Button.js
import React from 'react';

export const Button = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
      {label}
    </button>
  );
};`,
    },
    pages: {
      title: 'src/pages/',
      badge: 'Router Page Views',
      purpose: 'Contains top-level screen views mapped directly to application routes (e.g. Home, Dashboard, UserProfile).',
      bestPractices: [
        'Page components assemble smaller components from components/ and manage page route state.',
        'Name files according to routes (e.g., HomePage.js, AboutPage.js).',
        'Keep layout composition clean by delegating UI rendering to components/.',
      ],
      exampleCode: `// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/common/Navbar';
import Card from '../components/common/Card';

export const HomePage = () => (
  <main className="page-container">
    <h1>Welcome Home</h1>
    <Card title="Featured Content">Home page content here...</Card>
  </main>
);`,
    },
    utils: {
      title: 'src/utils/',
      badge: 'Pure Helper Functions',
      purpose: 'Stores non-React pure JavaScript utility functions like date formatting, currency calculators, validators, and string manipulators.',
      bestPractices: [
        'Functions in utils should be pure (no side effects or React state).',
        'Extremely easy to unit test with Jest or Vitest.',
        'Export functions individually for clean tree-shaking.',
      ],
      exampleCode: `// src/utils/formatters.js
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};`,
    },
    context: {
      title: 'src/context/',
      badge: 'Global State Management',
      purpose: 'Holds React Context providers for application-wide state like authentication, user theme preference, or cart data.',
      bestPractices: [
        'Use Context for truly global values to prevent prop drilling.',
        'Create custom hooks (e.g. useAuth, useTheme) for easy context consumption.',
      ],
      exampleCode: `// src/context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`,
    },
    hooks: {
      title: 'src/hooks/',
      badge: 'Custom React Hooks',
      purpose: 'Contains custom reusable React hooks encapsulating complex stateful logic, API fetching, or event listeners.',
      bestPractices: [
        'Prefix hook function names with `use` (e.g., useLocalStorage, useFetch).',
        'Reusable across multiple components.',
      ],
      exampleCode: `// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};`,
    },
    services: {
      title: 'src/services/',
      badge: 'API & HTTP Data Layer',
      purpose: 'Contains API client configurations, Axios instances, and endpoint HTTP fetch handlers.',
      bestPractices: [
        'Separate HTTP request logic from React UI rendering.',
        'Handles API error responses centrally.',
      ],
      exampleCode: `// src/services/apiService.js
export const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};`,
    },
  };

  const interactiveScenarios = [
    {
      id: 1,
      question: 'Where do I put a reusable <Button /> component?',
      folder: 'components',
      explanation: 'UI buttons are reusable visual elements, so they belong in `src/components/common/`.',
    },
    {
      id: 2,
      question: 'Where do I put the full `/dashboard` screen?',
      folder: 'pages',
      explanation: 'Top-level views connected to React Router belong in `src/pages/`.',
    },
    {
      id: 3,
      question: 'Where do I put a date formatter function?',
      folder: 'utils',
      explanation: 'Pure JS helper functions belong in `src/utils/formatters.js`.',
    },
    {
      id: 4,
      question: 'Where do I handle API fetch requests?',
      folder: 'services',
      explanation: 'HTTP fetch calls belong in `src/services/apiService.js`.',
    },
  ];

  const handleScenarioClick = (scenario) => {
    setSelectedQuiz(scenario);
    setActiveFolder(scenario.folder);
  };

  const selected = folderDetails[activeFolder];

  return (
    <div className="page-wrapper fade-in">
      {/* Header Banner */}
      <div className="page-header">
        <Badge type="info" label="React Code Organization" icon={<BookOpen size={14} />} />
        <h1 className="mt-2">
          <FolderPlus className="inline-icon text-cyan" /> React Project Folder Architecture
        </h1>
        <p className="page-lead">
          As React applications grow, keeping files organized is critical. A standard folder structure separates concerns into modular directories so code is easy to find, reuse, and scale.
        </p>
      </div>

      {/* Mental Model Analogy Box */}
      <div className="analogy-banner">
        <div className="analogy-header">
          <Zap className="text-yellow" size={24} />
          <h3>The Mental Model: The Professional Kitchen</h3>
        </div>
        <p className="analogy-desc">
          Imagine organizing a high-efficiency restaurant kitchen:
        </p>
        <div className="kitchen-grid">
          <div className="kitchen-card">
            <span className="kitchen-tag tag-cyan">src/components/</span>
            <h4>Cooking Utensils</h4>
            <p>Pans, knives, and prep bowls reused for many meals (reusable UI buttons, cards, modals).</p>
          </div>
          <div className="kitchen-card">
            <span className="kitchen-tag tag-purple">src/pages/</span>
            <h4>Plated Dinners</h4>
            <p>Complete menu items served to customers (full screen route views like Home, About, Checkout).</p>
          </div>
          <div className="kitchen-card">
            <span className="kitchen-tag tag-emerald">src/utils/</span>
            <h4>Spice Recipes</h4>
            <p>Pure formulas for taste measurement (date formatters, currency math, text truncation).</p>
          </div>
          <div className="kitchen-card">
            <span className="kitchen-tag tag-indigo">src/services/</span>
            <h4>Food Suppliers</h4>
            <p>Delivering fresh ingredients into the kitchen from outside (API fetch HTTP requests).</p>
          </div>
        </div>
      </div>

      {/* Interactive "Where Does This Code Go?" Finder */}
      <Card title='❓ Interactive "Where Does This Code Go?" Finder' badge="Click to Test" variant="accent">
        <div className="quiz-finder-section">
          <p className="quiz-prompt">Click a developer task below to see which folder it belongs in:</p>
          <div className="quiz-buttons-grid">
            {interactiveScenarios.map((sc) => (
              <button
                key={sc.id}
                className={`quiz-scenario-btn ${selectedQuiz?.id === sc.id ? 'active' : ''}`}
                onClick={() => handleScenarioClick(sc)}
              >
                <HelpCircle size={16} className="text-cyan" />
                <span>{sc.question}</span>
              </button>
            ))}
          </div>

          {selectedQuiz && (
            <div className="quiz-result-toast">
              <Sparkles size={18} className="text-yellow" />
              <div>
                <strong>Folder Target: <code>src/{selectedQuiz.folder}/</code></strong>
                <p>{selectedQuiz.explanation}</p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Main Folder Explorer Layout */}
      <div className="folder-explorer-layout">
        {/* Folder Tree Sidebar */}
        <div className="tree-sidebar">
          <Card title="Project Directory Tree" badge="src/" variant="default">
            <div className="folder-tree-list">
              <div className="tree-root-item">
                <Folder className="folder-icon text-yellow" size={18} />
                <span>my-app / src</span>
              </div>
              <div className="tree-children">
                {Object.keys(folderDetails).map((key) => {
                  const isActive = activeFolder === key;
                  return (
                    <button
                      key={key}
                      className={`tree-item-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveFolder(key)}
                    >
                      <ChevronRight size={14} className={`chevron ${isActive ? 'expanded' : ''}`} />
                      <Folder size={16} className={`folder-icon ${isActive ? 'text-cyan' : 'text-purple'}`} />
                      <span className="folder-name">{key}/</span>
                    </button>
                  );
                })}

                <div className="tree-item-file">
                  <FileText size={15} className="file-icon" />
                  <span>App.js</span>
                </div>
                <div className="tree-item-file">
                  <FileText size={15} className="file-icon" />
                  <span>App.css</span>
                </div>
                <div className="tree-item-file">
                  <FileText size={15} className="file-icon" />
                  <span>index.js</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Selected Folder Details Pane */}
        <div className="folder-details-pane">
          <Card title={selected.title} badge={selected.badge} variant="primary">
            <div className="folder-info-content">
              <div className="purpose-box">
                <Info size={20} className="info-icon text-cyan" />
                <p>{selected.purpose}</p>
              </div>

              <h4>Key Responsibilities & Best Practices:</h4>
              <ul className="practices-list">
                {selected.bestPractices.map((practice, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="check-icon text-emerald" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>

              <div className="code-example-section">
                <h4>Standard Code Pattern:</h4>
                <CodeSnippet code={selected.exampleCode} language="javascript" title={`${selected.title} example`} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FolderStructurePage;
