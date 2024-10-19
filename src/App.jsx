import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/signup" />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

   
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
