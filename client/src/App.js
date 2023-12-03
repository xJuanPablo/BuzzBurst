import './App.css';
import './pages/Home/home.css'
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useLocalStorage from './Hooks/useLocalStorage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [id, setId] = useLocalStorage('id');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={id ? <Navigate to="/dashboard" /> : <Login onIdSubmit={setId} />}
      />
      <Route path="/dashboard" element={<Dashboard id={id} />} />
    </Routes>
  );
}

export default App;
