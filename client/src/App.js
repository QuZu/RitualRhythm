import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';

// Pages
import Dashboard from './pages/Dashboard';
import AddHabit from './pages/AddHabit';
import DeleteHabit from './pages/DeleteHabit';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <nav className="main-navbar">
        <ul className="main-navbar-list">
          <li className="main-navbar-item">
            <Link to="/" className="main-navbar-link">Dashboard</Link>
          </li>
          <li className="main-navbar-item">
            <Link to="/add" className="main-navbar-link">Add Habit</Link>
          </li>
          <li className="main-navbar-item">
            <Link to="/delete" className="main-navbar-link">Delete Habit</Link>
          </li>
        </ul>
      </nav>

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddHabit />} />
      <Route path="/delete" element={<DeleteHabit />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </React.Suspense>
  );
}

export default App;
