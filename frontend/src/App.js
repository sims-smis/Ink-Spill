import React from 'react';
import './App.css'; // Ensure this file is imported
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './screens/Home';
import Room from './screens/Room';

function App() {
  return (
    <Router>
      <div style={{ color: 'white' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
