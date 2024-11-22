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
    <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/delete">Delete</Link>
            </li>
          </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddHabit />} />
      <Route path="/delete" element={<DeleteHabit />} />
    </Routes>
    </React.Suspense>
  );
}

export default App;
