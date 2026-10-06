import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeSnippet = ({ title, code, language = 'jsx' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-snippet-box">
      {title && (
        <div className="code-snippet-header">
          <span className="code-lang-tag">{language.toUpperCase()}</span>
          <span className="code-snippet-title">{title}</span>
          <button className="copy-code-btn" onClick={handleCopy} title="Copy code">
            {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      )}
      <pre className="code-snippet-body">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
