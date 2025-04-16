import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ItemManagement from './pages/ItemManagement';
import UsageHistory from './pages/UsageHistory';
import Predictions from './pages/Predictions';
import UserManagement from './pages/UserManagement';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/items" element={<ItemManagement />} />
            <Route path="/history" element={<UsageHistory />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;