import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Layers, Component, Navigation, FolderTree } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <div className="brand-icon">
            {/* <ReactLogoIcon /> */}
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3D271D"><path d="M135-95v-94h691v94H135Zm171-159q-72.11 0-121.56-49.5Q135-353 135-424v-442h677q38.78 0 66.39 27.89Q906-810.21 906-772v160q0 38.75-27.61 66.37Q850.78-518 812-518h-82v94q0 71-50.17 120.5T558-254H306Zm1-517h329-407 78Zm423 159h81v-160h-81v160ZM556.98-349q31.07 0 55.05-23.39Q636-395.77 636-425v-346H406v51l71 58q1 1 9 18v150q0 9.6-7 16.8-7 7.2-18 7.2H310q-11 0-18-7.2t-7-16.8v-150q0-4 9-18l72-58v-51H229v346q0 29.23 23.71 52.61Q276.42-349 307-349h249.98ZM351-771h40-40Z" /></svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">React Core Concepts</span>
            <span className="brand-subtitle">Interactive Guide</span>
          </div>
        </NavLink>

        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <Layers className="nav-icon" size={18} />
            <span>Overview</span>
          </NavLink>

          <NavLink
            to="/folder-structure"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <FolderTree className="nav-icon" size={18} />
            <span>Folder Structure</span>
          </NavLink>

          <NavLink
            to="/props-demo"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <Component className="nav-icon" size={18} />
            <span>Props & State</span>
          </NavLink>

          <NavLink
            to="/routing-demo"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <Navigation className="nav-icon" size={18} />
            <span>Routing & Nav</span>
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={18} className="text-yellow" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon size={18} className="text-indigo" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

// SVG Icon for React logo
const ReactLogoIcon = () => (
  <svg className="react-spin-icon" viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export default Navbar;
