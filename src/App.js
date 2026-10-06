import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Common UI Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import HomePage from './pages/HomePage';
import FolderStructurePage from './pages/FolderStructurePage';
import PropsPage from './pages/PropsPage';
import RoutingPage from './pages/RoutingPage';
import UserDetailPage from './pages/UserDetailPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<HomePage />} />

              {/* React Folder Architecture Explanation */}
              <Route path="/folder-structure" element={<FolderStructurePage />} />

              {/* Props & Component State Interactive Demo */}
              <Route path="/props-demo" element={<PropsPage />} />

              {/* Routing & Navigation Demo */}
              <Route path="/routing-demo" element={<RoutingPage />} />

              {/* Dynamic Route Parameter Demo */}
              <Route path="/routing-demo/user/:id" element={<UserDetailPage />} />

              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
